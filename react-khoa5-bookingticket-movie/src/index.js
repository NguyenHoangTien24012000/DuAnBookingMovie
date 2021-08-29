import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './i18n';
import { Suspense } from 'react';
// import { DOMAIN } from './util/config';

// //Cau hinh realtime (websocket voi signalR)
// import * as signalR from '@aspnet/signalr'


// //Doan code de ket noi server lang nghe su kien tu server
// export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

// connection.start().then(()=>{
//   ReactDOM.render(
//     <Provider store ={store}>
//       <App />
//     </Provider>
//     ,
//     document.getElementById('root')
//   );
// }).catch(error =>{
//   console.log(error);
// }) 
 ReactDOM.render(
  <Provider store ={store}>
      <Suspense fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
  </Provider>
  ,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
