import React, {Component, Children} from 'react';
import './style.css';
import Left from './Left'
import Right from './Right'
class SupCell extends Component{
    constructor (props){
        super(props)
        this.state={
            newLi:0
        }
    }
    dataC(kls){
        this.setState({
            newLi:kls
        })
       
    }
    render(){
        const {newJson,newKey,parentLik} =this.props;
        const {newLi} = this.state; 
       
            let dataL =[];
            let dataR =[];
            for(let keys  in newJson){           
               dataL.push(keys);
               dataR.push(newJson[keys])
            }
        return (
            <div className='sections'>
               <Left dataL={dataL} dataClick = {this.dataC.bind(this)}/>

                <Right newJsons={dataR} newLId={newLi}/>
            </div>
        )
    }
}
export default SupCell
 