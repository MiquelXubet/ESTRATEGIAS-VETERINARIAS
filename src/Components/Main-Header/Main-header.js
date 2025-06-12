import React from "react";
import logo from "../../Images/logo.png";
import Nav from "./Nav";
import "./Main-header.css";

function Mainheader() {
  return (
    <header className="main-header">
      <div className="main-header-content">
        <img src={logo} alt="imagen-logo" className="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Mainheader;
