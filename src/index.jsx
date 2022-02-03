import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App titulo="Weather App Con Class Components y setState"/>
  </BrowserRouter>,
  document.getElementById('root')
);

