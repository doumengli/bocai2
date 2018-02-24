import React,{Component} from 'react';
import './style.css'
export default class Right extends Component{
    render(){
        const {newJsons,newLId} = this.props;
        const newData =newJsons[newLId?newLId:0];
        console.log(newData)
        return(
            <div className='rights'>
             {
                newData!= undefined && newData.map((item,idx)=>{
                    return(
                        <div className='riL'>
                            <p key={idx}> {item.leagueName}</p>
                            <p><img alt='' src={item.players=item.players[0].picUrl}/></p>
                        </div>
                        
                       )
                })
               
             }
            </div>
        )
    }
}

 // {} 

//  {
//                 newJsons[newId].map((item,idx) => {
//                     if (idx == newLId){
//                         return(
//                         <p>{item}</p>
//                     )
//                 }
//                 })    
//                }