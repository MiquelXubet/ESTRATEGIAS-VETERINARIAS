import ayuda from "../../data/AyudaData";
import "./ComoAyudamos.css";
import React from "react";

function ComoAyudamos() {
  return (
    <section className="como-ayudamos">
      <h2>Cómo vamos a ayudarte?</h2>
      {ayuda.map((item) => (
        <div className="punto-fuerte" key={item.titulo}>
          <div className="icono">{item.icon}</div>
          <div className="contenido">
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="extra">{item.extra}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ComoAyudamos;
