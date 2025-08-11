import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js'

import { Home } from './pages/Home/Home.js';
import { AboutUs } from './pages/AboutUs/AboutUs.js';
import { Categories } from './pages/Categories/Categories.js';
import { Product } from './pages/Product/Product.js';
import { Profile } from './pages/Profile/Profile.js';
import { NotFound } from './pages/NotFound/NotFound.js';
import { Cart } from './pages/Cart/Cart.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster, toast } from 'sonner';


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
  {
    path:'/Search',
    element: <Home/>,
  },
  {
    path:'/Search/:pageNum',
    element: <Home/>,
  },
  {
    path:'/Search/:pageNum/:text',
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
        <Toaster/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);