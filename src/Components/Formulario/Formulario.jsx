import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Formulario.css";

// Componente Formulario

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", { nombre, email, asunto, mensaje });

    emailjs
      .sendForm(
        "service_isz2jvd", // Tu Service ID
        "template_ab816tj", // Tu Template ID
        event.target, // El formulario HTML
        "6Lg-f7Z8vNBqT6PyP" // Tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setTimeout(() => setEnviado(false), 9000);
        setNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
      });
  };

  return (
    <div>
      <form className="formulario-contacto" onSubmit={handleSubmit}>
        {enviado && (
          <p className="mensaje-enviado">
            ¡Gracias! Tu mensaje ha sido enviado.
          </p>
        )}
        <h2 className="formulario-de-contacto">Formulario de Contacto</h2>
        <div className="formulario-campos">
          <div className="campo-nombre">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="campo-email">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ingresa tu email"
              required
            />
          </div>
          <div className="campo-asunto">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={asunto}
              onChange={(event) => setAsunto(event.target.value)}
              placeholder="Ingresa el asunto"
            ></input>
          </div>
          <div className="campo-mensaje">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <div className="campo-boton">
            <button
              type="submit"
              className="boton-enviar"
              disabled={!nombre || !email || !asunto || !mensaje}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
