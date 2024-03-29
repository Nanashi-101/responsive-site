import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Any from './pages/Any';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/any',
    element:<Any/>,
    errorElement:<ErrorPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);