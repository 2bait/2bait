import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route,Navigate, BrowserRouter } from "react-router-dom";
import './assets/css/default.css';
import './assets/css/layout.css';
import './assets/css/media-queries.css';
//import reportWebVitals from './reportWebVitals';
//import Main from './components/main';
import Home from './components/home';
import NotFound from './components/errors/not_found';
import Jokes from './components/jokes'
import resume from "./data/resume";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename="/">
      <Routes>
        {/* <Route path='/' element={<Main />}>    </Route>     */}
          <Route index element={<Home resume={resume} />} />
          <Route exact path='oskfjhghrh'  element={<Navigate to="/jokes"  replace state={"qr"} />} />
          <Route path='jokes' element={<Jokes/>}  />  
          <Route path='*' element={<NotFound />}/>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
