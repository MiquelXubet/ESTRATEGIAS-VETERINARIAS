import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home";
import Contacto from "./Components/Pages/Contacto";
import Servicios from "./Components/Pages/Servicios";
import Nosotros from "./Components/Pages/Nosotros";
import "./App.css"; // Import your main CSS file

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Servicios" element={<Servicios />} />
            <Route path="Nosotros" element={<Nosotros />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
