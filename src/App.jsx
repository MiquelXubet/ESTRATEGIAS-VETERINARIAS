import "./App.css";
import Topheader from "./Components/Top-header/Header";
import Mainheader from "./Components/Main-Header/Main-header";
import Hero from "./Components/Banner/Hero";
import Servicios from "./Components/Servicios/Servicios";
import ComoAyudamos from "./Components/Ayuda/ComoAyudamos";
import Testimonios from "./Components/Testimonios/Testimonios";
import Formulario from "./Components/Formulario/Formulario";
import Footer from "./Components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
