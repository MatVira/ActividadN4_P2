import React, { useState } from "react";


import InputText from "./InputText";
import InputEmail from "./InputEmail";
import InputTel from "./InputTel";
import Input from "./Input";
import Boton from "./Boton";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Inscripción completada:\n\nNombre: ${nombre}\nEdad: ${edad}\nFecha de nacimiento: ${fechaNacimiento}\nTeléfono: ${telefono}\nCorreo: ${email}`);
  };

  return (
    <form className="card p-4 shadow mt-5" onSubmit={manejarEnvio}>
      <h5 className="mb-3">Formulario de Inscripción</h5>

      <div className="mb-3">
        <InputText
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <Input
          type="date"
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <InputTel
          placeholder="Número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <InputEmail
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <Boton texto="Enviar inscripción" type="submit" />
      </div>
    </form>
  );
}

export default Formulario;
