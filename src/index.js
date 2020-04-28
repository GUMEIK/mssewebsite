import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Skeleton } from 'antd';
document.onreadystatechange = ()=>{
  if(document.readyState === "complete"){
    // 资源加载完成
    ReactDOM.render(
      // <React.StrictMode>
      //   <App />
      // </React.StrictMode>,
      <App />,
    
      document.getElementById('root')
    );
  }else{//资源加载中
    ReactDOM.render(
      <>
        <Skeleton active={true}/>,
        <Skeleton />,
        <Skeleton />,
        <Skeleton />,
      </>,
      document.getElementById('root')
    );
  }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
