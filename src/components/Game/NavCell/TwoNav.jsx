import React, {Component, Children} from 'react';
import './style.css';
class TwoNav extends Component{
    constructor (props){
        super(props)
        this.state={
            arr:['按时间','按联赛','','icon iconfont icon-wode']
        }
    }
    tab (newIds){
        const {tabs} = this.props;
        tabs(newIds)
    }
    render(){
       const {isTitle=true,tabs,itial} = this.props;
        return (
            <div className='supNav'>
            <a className={itial == 1 ? 'active' : ''} onClick={this.tab.bind(this,1)}>按时间</a>
            {isTitle ? <a className={itial == 2 ? 'active' : ''} onClick={this.tab.bind(this,2)}>按联赛</a> : ''}
            <a className={itial == 3 ? 'active' : ''} onClick={this.tab.bind(this,3)}>我的关注</a>
            <a className='icon iconfont icon-wode'></a>
            </div>
        )

    }
}
export default TwoNav