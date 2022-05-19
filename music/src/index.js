import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Main from './pages/Main';
import Home from "./pages/Home.js"
import Nav from "./Components/Nav"
// import Login from './pages/Login';


// wraping app comonenet w router comments to enbale router features
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />}>   
          <Route index element={<Home />} />
          <Route id="new-color" path="/main" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)