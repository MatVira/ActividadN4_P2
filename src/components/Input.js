import React from "react";

function Input({ type, placeholder, value, onChange }) {
    <h5 className="mb-3">Inscríbete al club</h5>
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  );
}

export default Input;