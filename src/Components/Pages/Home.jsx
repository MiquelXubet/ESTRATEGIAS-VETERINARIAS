import React from "react";
import Hero from "../Banner/Hero";
import ComoAyudamos from "../Ayuda/ComoAyudamos";
import Servicios from "../Servicios/Servicios";
import Testimonios from "../Testimonios/Testimonios";
import Formulario from "../Formulario/Formulario";

function Home() {
  return (
    <div>
      <Hero />
      <ComoAyudamos />
      <Servicios />
      <Testimonios />
      <Formulario />
    </div>
  );
}

export default Home;
