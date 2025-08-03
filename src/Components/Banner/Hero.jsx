import React from "react";
import "./Hero.css";
import heroImage from "../../images/banner.png"; // Usa tu imagen aquí

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Marketing veterinario" />
      </div>
      <div className="hero-content">
        <h1>Transforma tu clínica veterinaria</h1>
        <p>Marketing digital especializado para el sector veterinario.</p>
        {/* <p>
          Aumenta tu visibilidad, atrae más clientes y mejora la comunicación
          con tus pacientes.
        </p> */}
        <button className="hero-btn">Solicita una demo</button>
      </div>
    </section>
  );
}

export default Hero;
