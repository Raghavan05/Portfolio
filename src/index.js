 /* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));


function Routingpage () {
    return(
      <BrowserRouter basename='/Portfolio'>
      <Routes>
      <Route exact path = "/" element = {<Home/>}></Route>
      <Route path = "/Contact" element = {<Contact/>}></Route>
      <Route path = "/About" element = {<About/>}></Route>
      </Routes>
      </BrowserRouter>
    );
}


root.render(
  <React.StrictMode>
    <Routingpage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
