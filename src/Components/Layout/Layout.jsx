import React from "react";
import { Outlet } from "react-router-dom";
import Topheader from "../Top-header/Header";
import Mainheader from "../Main-Header/Main-header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      {/* <Topheader /> */}
      <Mainheader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
