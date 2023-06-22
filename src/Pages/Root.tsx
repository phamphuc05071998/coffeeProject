import React from "react";
import Navigation from "../Layouts/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../Layouts/Footer/Footer";
const Root = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
      <ScrollRestoration/>
    </>
  );
};

export default Root;
