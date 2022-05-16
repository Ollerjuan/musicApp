import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter as Router } from "react-router-dom"
// import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Login from './Components/Login';
import Main from './Components/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes> */}
        <Home />
        <Login />
        <Main />
      {/* </Routes>
    </Router> */}
  </React.StrictMode>
  
  // document.getElementById('root')
);