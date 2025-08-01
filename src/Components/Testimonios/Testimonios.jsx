import React from "react";
import Opiniones from "../../data/OpinionesData";
import "./Testimonios.css";

function Testimonios() {
  return (
    <section className="testimonios">
      <h3 className="testimonios-titulo">Lo que opinan nuestros clientes</h3>
      <div className="testimonios-grid">
        {Opiniones.map((opinion) => (
          <div className="card-testimonio" key={opinion.id}>
            <p className="texto-testimonio">{opinion.texto}</p>
            <div className="autor-testimonio">
              <img src={opinion.avatar} alt="foto-testimonio" />
              <p className="nombre-testimonio">{opinion.nombre}</p>
            </div>
          </div>
        ))}
        <p></p>
      </div>
    </section>
  );
}

export default Testimonios;
