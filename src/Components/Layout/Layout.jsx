import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mainheader from "./Components/Main-Header/Main-header";
import "./Layout.css";

function Layout() {
  return (
    <>
      <Header />
      <Mainheader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
