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
    <section className="formulario-contacto-container">
      <h2 className="titulo-contacto">Contacta con nosotros</h2>
      <p className="descripcion-contacto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima natus
        deleniti suscipit nesciunt ullam. Amet consectetur adipisicing elit.
        Minima natus deleniti suscipit.
      </p>
      <div className="contenido-contacto">
        <div className="informacion-contacto-container">
          <div className="info-telefono">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&" />
            <div>
              <h3>Llámanos</h3>
              <p>+34 123 456 789</p>
            </div>
          </div>
          <div className="info-email">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&" />
            <div>
              <h3>Escríbenos</h3>
              <p>contacto@estrategiasveterinarias.com</p>
            </div>
          </div>
        </div>
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
    </section>
  );
}

export default Formulario;
