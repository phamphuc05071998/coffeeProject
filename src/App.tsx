import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Product from "./Pages/Product/index";
import Blog from "./Pages/Blog/index";
import ProductDetail from "./Pages/ProductDetail/index";

const About = lazy(() => import("./Pages/About/index"));
const Contact = lazy(() => import("./Pages/Contact/index"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
           index: true,
            element: <Product />,
          },
          {
            path: ":productId",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
