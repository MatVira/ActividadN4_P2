import React, { useState } from "react";
import Input from "./Input";

function InputTel({ placeholder = "Número de teléfono", name = "telefono", onInputChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Input
      type="tel"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputTel;
