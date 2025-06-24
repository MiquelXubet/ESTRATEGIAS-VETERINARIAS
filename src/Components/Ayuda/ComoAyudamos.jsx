import ayuda from "../../data/AyudaData";
import "./ComoAyudamos.css";
import React from "react";

function ComoAyudamos() {
  return (
    <section className="como-ayudamos">
      <h2>Cómo podemos ayudarte</h2>
      {ayuda.map((item) => (
        <div className="punto-fuerte" key={item.titulo}>
          <div className="primera-linea">
            <div className="icono">{item.icon}</div>
            <h3 className="titulo">{item.titulo}</h3>
          </div>
          <p className="descripcion">{item.descripcion}</p>
          <p className="extra">{item.extra}</p>
        </div>
      ))}
    </section>
  );
}

export default ComoAyudamos;
