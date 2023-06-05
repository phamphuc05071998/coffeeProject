import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import Home from './Pages/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      path: '/',
      element: <Home/>
    }]
  }
])
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
