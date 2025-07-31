import React, { useState } from "react";

import InputText from "./InputText";
import InputEmail from "./InputEmail";
import InputTel from "./InputTel";
import InputPassword from "./InputPassword";
import InputURL from "./InputURL";
import InputSearch from "./InputSearch";
import Input from "./Input";
import Boton from "./Boton";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Inscripción completada:

    Nombre: ${nombre}
    Edad: ${edad}
    Fecha de nacimiento: ${fechaNacimiento}
    Teléfono: ${telefono}
    Correo: ${email}
    Contraseña: ${password}
    Sitio web: ${url}
    Búsqueda: ${busqueda}`);
  };

  return (
    <form className="card p-4 shadow mt-5 mb-3 container" onSubmit={manejarEnvio}>
      <h3 className="mb-4">Formulario de Inscripción</h3>

      <div className="row g-3">
        <div className="col-md-6">
          <InputText placeholder="Nombre completo" name="nombre" onInputChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="col-md-6">
          <Input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="col-12">
          <Input
            type="date"
            placeholder="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <InputTel/>
        </div>

        <div className="col-md-6">
          <InputEmail/>
        </div>

        <div className="col-12">
          <InputPassword/>
        </div>

        <div className="col-12">
          <InputURL/>
        </div>

        <div className="col-12">
          <InputSearch />
        </div>

        <div className="col-12 text-end">
          <Boton texto="Enviar inscripción" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
