import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Home } from './Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Blogs } from "./Pages/Blogs";
import { Media } from './Pages/Media';

import { PProjects } from './Pages/PProjects';
import { WhyInvest } from './Pages/WhyInvest';
import { NRI } from './Pages/NRI';
import { Newsletter } from './Pages/Newsletter';
import { CSR } from './Pages/CSR';
import { Ourteam } from './Pages/Ourteam';
import { Management } from './Pages/Management';
import { Ourjourney } from './Pages/Ourjourney';
import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
let route=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'about-us',
    element:<About/>
  },
  {
    path:'contact-us',
    element:<Contact/>
  },
  {
    path:'blogs',
    element:<Blogs/>
  },
  {
    path:'media-events',
    element:<Media/>
  },
  {
    path:'projects',
    element:<PProjects/>
  },
  {
    path:'why-invest',
    element:<WhyInvest/>
  },
  {
    path:'nri-corner',
    element:<NRI/>
  },
  {
    path:'news-letter',
    element:<Newsletter/>
  },
  {
    path:'social-responsibility',
    element:<CSR/>
  },
  {
    path:'our-team',
    element:<Ourteam/>
  },
  {
    path:'management-speaks',
    element:<Management/>
  },
  {
    path:'our-journey',
    element:<Ourjourney/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={route}/>
   <ToastContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
