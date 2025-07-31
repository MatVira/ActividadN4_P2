import React, { useState } from "react";
import Input from "./Input";

function InputText({ placeholder = "Nombre completo", name = "nombre", onInputChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Input

      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputText;
