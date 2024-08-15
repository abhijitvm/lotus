import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './assets/css/animate.min.css'
import './assets/css/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css'
import './assets/css/flaticon.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/odometer.css'
import './assets/css/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from './App'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
