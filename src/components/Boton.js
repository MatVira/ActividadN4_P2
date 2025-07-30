// src/components/Boton.js
function Boton({ texto, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className="btn btn-primary w-100">
      {texto}
    </button>
  );
}

export default Boton;
