// src/Components/Pages/Nosotros.jsx

import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <section className="hero-nosotros">
        <h1>Sobre Estrategias Veterinarias</h1>
        <p>
          Cuidamos de tu clínica para que tú sigas cuidando de quienes más
          importan.
        </p>
      </section>

      <section className="mision-vision">
        <div>
          <h2>Nuestra Misión</h2>
          <p>
            Ayudamos a clínicas veterinarias a crecer a través de soluciones
            digitales efectivas: desarrollo web, redes sociales, SEO local,
            campañas publicitarias y automatización.
          </p>
        </div>
        <div>
          <h2>Nuestra Visión</h2>
          <p>
            Ser la empresa de referencia en marketing digital especializado para
            clínicas veterinarias, generando impacto real en su crecimiento.
          </p>
        </div>
      </section>

      <section className="valores">
        <h2>Nuestros Valores</h2>
        <ul>
          <li>❤️ Compromiso con el bienestar animal</li>
          <li>🤝 Cercanía con nuestros clientes</li>
          <li>📈 Orientación a resultados</li>
          <li>💡 Innovación constante</li>
        </ul>
      </section>
    </div>
  );
};

export default Nosotros;
