import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux';



ReactDOM.render(
  <React.StrictMode>
    {/* <Context> */}
    <Provider store = {store} ><App /></Provider>
    {/* </Context> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
