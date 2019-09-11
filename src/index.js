import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
//引入antd的全局状态文件
import 'antd/dist/antd.css';
import axios from './utils/axios.js'
// console.log(React)
//Vue.prototype.$axios  是一个方法，构造函数
React.Component.prototype.$axios=axios  //React是一个对象，Component是一个构造函数
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
