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
    <div className="col-12">
      <Input
        type="tel"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputTel;
