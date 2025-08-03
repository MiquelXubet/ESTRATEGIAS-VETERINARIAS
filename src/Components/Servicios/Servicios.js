import React from "react";
import servicios from "../../Data/ServiciosData";
import "./Servicios.css";

function Servicios() {
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div className="servicio-card" key={index}>
            <div className="servicio-imagen">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <h3>{servicio.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
