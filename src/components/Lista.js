import React from "react";

function Lista() {
  const elementos = [
    "Karate tradicional",
    "Defensa personal",
    "Entrenamiento físico",
    "Disciplina y respeto"
  ];

  return (
    <div className="card mb-4 shadow">
      <div className="card-header bg-primary text-white fw-bold">
        Nuestros entrenamientos
      </div>
      <ul className="list-group list-group-flush">
        {elementos.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;