import React, { useState } from "react";
import Input from "./Input";

function InputEmail({ placeholder = "Correo electrónico", name = "email", onInputChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Input
      type="email"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputEmail;
