import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import NavCell from '../../components/Game/NavCell';
import MainL from '../../components/Game/MainL';
import {connect} from 'react-redux';
import fatch from 'isomorphic-fetch';
import './style.css'
import {getNav,getOrigin,getSportTypeAction,getListAction,getLeftId} from '../../store/action/game';

class Game extends Component{
    constructor (props){
        super(props)
        this.state={
            json:null,//所有的tab数据
            slideKey:null
        }
    }
    
    componentDidMount () {
       const {getOrigin} = this.props
        axios.get('/list')
            .then((res) => {
                let OneList = res.data;  
                if(OneList.code != 0) return;  
                getOrigin(OneList.data.data); //所有的数据   
                OneList = OneList.data.data
                this.initNav(OneList)  
        })
    } 
  
    initNav (OneList,name='更多..',matchCount) {
        const {getNav} = this.props;
        let newNav=[];
        if(OneList.length>8){
            newNav = OneList.slice(0,7);
            newNav.push({name:name,sportType:'-11',matchCount:matchCount})
        }  
        getNav(newNav)  // 部分数据
    }

    saveSportType(sportType,name,matchCount,list){
        const {getSportTypeAction,getListAction,originNav,getNav} =this.props;
        getSportTypeAction(sportType);
       if(sportType !== '-11' && sportType !== '-1111'){
            sportType<10 ? sportType=`0${sportType}`:sportType = sportType;
            const url = `https://trad-pusher.8win.com/match/v2?k=cn0100${sportType}`
            fetch(url).then(res => res.json()) // 请求的tab的内柔
            .then(res => {
                const list =JSON.parse(res.data)
                getListAction(list)
                // 左侧的数据
                const arr = [];
                for(let item of list){
                    arr.push(item.matchTime.split(' ')[0])
                }
                
                const slideKeyS = new Set(arr);

               // console.log(slideKeyS,'2222222222222dddddddddddddddddddddd')
                // const json ={} // 利用对象去重 原理对象会覆盖前面的
                // for (let i of list){ 
                // json[item.name.split(" ")[0]]=[]
                // }

                const jsons = {}; // 汇总json数据
                for(let item of slideKeyS){
                     jsons[item] = [];// 把所有的数据的key赋进去
                    for(let i of list){ //list是对应每个所有的数据
                        const matchTime = i.matchTime.split(' ')[0];
                        //console.log(matchTime);
                        if(item === matchTime){
                            jsons[item].push(i); //把于key对应的数据push进去
                        }
                    }
                }
                // let arrs = []
                // for (let i in jsons) {
                //     arrs.push(jsons[i]); //属性
                //     //arr.push(object[i]); //值
                // }
                // console.log(arrs,'arrsrs')
              this.setState({
                  json:jsons,
                  slideKey:slideKeyS
              });
            }) 
            this.initNav(originNav,name,matchCount) 
       } else if(sportType === '-11'){
            getNav([...originNav,{name:'隐藏',sportType:'-1111'}])
             
       } else {
        this.initNav(originNav,name) 
       }    
    }
//  // 爷孙传参
//     static childContextTypes ={
//         sportType
//     }
    render(){
     const {nav,sportType,leftId} = this.props;
     const isTitle = sportType ===1 || sportType ===0;
     const {json,slideKey} = this.state;
   //console.log(json,'kkkkkkkkkkkkkk')
    console.log(slideKey,'slideKey')
        return (<div className='mains'>
               <div className='cellNav'>
                { 
                    nav !== null && nav.map((item,idx) => {
                    return ( 
                        <MainL 
                         key={idx} 
                         navList={item} 
                         getSportType={this.saveSportType.bind(this)}
                         ids={idx}
                        /> 
                      )
                    })
                    }
               </div>
               <div className='qq'>
               <NavCell isTitle={isTitle} jsonss={json} keys={slideKey} />
               </div>
            </div>)
    }
}
const mapStateToProps = (state)=>{
    return{
        nav:state.game.nav, 
        originNav:state.game.originNav,
        sportType:state.game.sportType,
        list:state.game.list,
        leftId:state.game.leftId    //获取左边点击事件的id    
    }
}
const mapDispatchToProps ={
   getNav,
   getOrigin,
   getSportTypeAction,
   getListAction,
   getLeftId,

}
export default connect(mapStateToProps,mapDispatchToProps)(Game)
