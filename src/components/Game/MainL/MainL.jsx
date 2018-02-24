import React, {Component} from 'react';
import './style.css';
class MainL extends Component{
    click(){
       const {navList,getSportType,ids} =this.props;
        let sportType = navList.sportType;  
        let name = navList.name; // 获取的name
        let matchCount = navList.matchCount; // 个数
        // const newName = ids > 6 && sportType !='-11' && sportType !='-1111'? name:'更多'; // 如果下标大于6且不为更多或隐藏
        let newName = '';
       if (ids > 6 && sportType !='-11' && sportType !='-1111') {
            newName = name
            matchCount = matchCount
       } else{
        newName = '更多。。'
        matchCount = ''
       }
        getSportType(sportType,newName,matchCount)
    }
    render(){
        const {navList} = this.props;
      // console.log(navList,'///////////qqqqqqqqqqqqqq')
      if(navList != undefined){
        return (
              <a onClick={this.click.bind(this)}>
                  {navList.name}{navList.matchCount}
                </a>     
           )
      } else {
          return (<div></div>)
      }
        
    }
}
export default MainL