import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Icon/iconfont.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import mock from './mock';
if(process.env.NODE_ENV === 'development'){ // 判断环境变量
    mock()
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
