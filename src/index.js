import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js'

import { Home } from './pages/Home/Home.js';
import { AboutUs } from './pages/AboutUs/AboutUs.js';
import { Categories } from './pages/Categories/Categories.js';
import { Product } from './pages/Product/Product.js';
import { Profile } from './pages/Profile/Profile.js';
import { NotFound } from './pages/NotFound/NotFound.js';
import { Cart } from './pages/Cart/Cart.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/AboutUs',
    element: <AboutUs/>,
  },
  {
    path: '/Categories',
    element: <Categories/>,
  },
  {
    path: '/Products/:productName',
    element: <Product/>,
  },
  {
    path: '/Profile',
    element: <Profile/>,
  },
  {
    path: '/Cart',
    element: <Cart/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);