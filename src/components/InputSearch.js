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
    <div className="col-md-6 mb-3">
      <Input
        type="search"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputSearch;
