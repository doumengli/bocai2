import React, {Component} from 'react';
import './style.css'
export default class Headers extends Component{
    render(){
        return (
            <div className='header'>
            <a><i className='icon iconfont icon-icongerenzhongxin-01'></i> 未登录 <small><i className='icon iconfont icon-jia'></i></small></a>
            <a>分秒必猜</a> 
            <a><i className='icon iconfont icon-gengduo-2'></i></a>         
            </div>
        )
    }
}