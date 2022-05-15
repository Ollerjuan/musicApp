import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Login from './Components/Login';
import Main from './Main'


ReactDOM.render(
  <React.StrictMode>
        <Home />
        <Login />
        <Main />
  </React.StrictMode>,
  document.getElementById('root')
);