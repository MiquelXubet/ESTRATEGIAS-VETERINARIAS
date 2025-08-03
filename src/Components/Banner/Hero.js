import React from "react";
import "./Hero.css";
import heroImage from "../../Images/banner.png"; // Usa tu imagen aquí

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tu clínica veterinaria</h1>
        <p>Marketing digital especializado para el sector veterinario.</p>
        <button className="hero-btn">Solicita una demo</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Marketing veterinario" />
      </div>
    </section>
  );
}

export default Hero;
