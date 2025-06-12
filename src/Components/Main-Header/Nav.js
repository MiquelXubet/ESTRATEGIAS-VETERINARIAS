import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="/servicios">Servicios</a>
        </li>
        <li>
          <a href="/planes">Planes</a>
        </li>
        <li>
          <a href="/nosotros">Nosotros</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
