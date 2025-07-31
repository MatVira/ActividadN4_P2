import React from "react";

function Lista() {
  const elementos = [
    "Karate tradicional",
    "Defensa personal",
    "Entrenamiento físico",
    "Disciplina y respeto"
  ];

  return (
    <div className="card mb-4 shadow w-75 mx-auto">
      <div className="card-header bg-warning text-white fw-bold">
        Lista de entrenamientos
      </div>
      <ol className="list-group list-group-numbered">
        {elementos.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Lista;