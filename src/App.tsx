import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import Home from './Pages/Home';
import Product from "./Pages/Product/index"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      path: '/',
      element: <Home/>
    }, {
      path: "/products",
      element: <Product/>
    }]
  }
])
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
