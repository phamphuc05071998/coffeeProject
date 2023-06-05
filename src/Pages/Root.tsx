import React from "react";
import Navigation from "../Layouts/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration/>
    </>
  );
};

export default Root;
