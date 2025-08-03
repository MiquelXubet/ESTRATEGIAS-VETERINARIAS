import React, { useState } from "react";
import logo from "../../images/logo.png";
import Nav from "./Nav";
import "./Main-header.css";

function Mainheader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header">
      <div className="main-header-content">
        <img src={logo} alt="imagen-logo" className="logo" />
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
        </button>
        <Nav isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Mainheader;
