import React from "react";

function Titulo({ texto, nivel = 1 }) {
  const Tag = `h${nivel}`;
  return (
    <Tag className="fw-bold text-center text-dark display-4 mb-4">
      Club de karate-Do Hatamoto Kai
    </Tag>
  );
}

export default Titulo;