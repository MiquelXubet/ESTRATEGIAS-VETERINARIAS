import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="caja-logo-redes">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Estrategias Veterinarias"
            className="footer-logo"
          />
        </div>
        <div className="footer-redes">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Estrategias Veterinarias. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
