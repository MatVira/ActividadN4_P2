import React from "react";

function Tabla() {
  const cabecera = ["Nombre", "Edad", "Cinturón"];
  const datos = [
    ["Ana", 12, "Blanco"],
    ["Luis", 15, "Amarillo"],
    ["Marta", 17, "Verde"],
    ["Carlos", 19, "Negro"]
  ];

  return (
    <div className="card shadow">
      <div className="card-header bg-success text-white fw-bold">
        Listado de alumnos
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mb-0 text-center">
          <thead className="table-light">
            <tr>
              {cabecera.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {fila.map((dato, colIndex) => (
                  <td key={colIndex}>{dato}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabla;
