import React, { useState } from "react";
import Input from "./Input";

function InputSearch({ placeholder = "Buscar...", name = "search", onInputChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Input
      type="search"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputSearch;
