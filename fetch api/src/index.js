import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import axios from 'axios';
// axios.interceptors.request.use(req=>{
//     console.log(req);
//     return req;
// },error=>{
//     console.log(error);
//     return Promise.reject(error);
// });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
