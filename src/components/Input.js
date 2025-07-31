import React from "react";

function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="form-control"
    />
  );
}

export default Input;
