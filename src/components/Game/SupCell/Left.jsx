import React,{Component} from 'react';
import './style.css';


export default class Left extends Component{
 
    onTab (kl) {//对应的下标
        alert(kl)
        const {dataClick} =this.props;
        dataClick(kl)
   }
  
    render(){
        const {dataL} = this.props;
     //   console.log(dataL,'LLLLLLLLLLLLL')
       return(
           <div className='lefts'>
           {dataL.map((item,idx)=> {return(<p key={idx} onClick={this.onTab.bind(this,idx)}>{item}</p>)})}
            </div>
        )  
    }
}

  