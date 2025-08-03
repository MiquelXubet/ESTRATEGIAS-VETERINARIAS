import React from "react";
import "./App.css";
import Topheader from "./Components/Top-header/Header";
import Mainheader from "./Components/Main-Header/Main-header";
import Hero from "./Components/Banner/Hero";
import Servicios from "./Components/Servicios/Servicios";
import ComoAyudamos from "./Components/Ayuda/ComoAyudamos";
import Testimonios from "./Components/Testimonios/Testimonios";
import Formulario from "./Components/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Mainheader />
      <Hero />
      <ComoAyudamos />
      <Servicios />
      <Testimonios />
      <Formulario />
    </div>
  );
}

export default App;
