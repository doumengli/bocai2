import React, {Component, Children} from 'react';
import TwonNav from './TwoNav.jsx'
import SupCell from '../SupCell'
import './style.css';
import { getLeftId } from './../../../store/action/game';

class NavCell extends Component{
    constructor (props) {
        super(props)
        this.state={
            itial:0
        }
      
    }
    changTab(tabId){
        this.setState({
            itial:tabId
        })
    }
    
    render(){
        const {isTitle=true,jsonss,keys} = this.props;
      
        return (
            <React.Fragment>
            <TwonNav isTitle = {isTitle} tabs={this.changTab.bind(this)} itial ={this.state.itial}/>
            <SupCell newJson={jsonss} newKey={keys} />
            </React.Fragment>
        )
    }
}
export default NavCell