import React, { useState } from "react";
import Input from "./Input";

function InputURL({ placeholder = "Sitio web personal", name = "url", onInputChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  return (
    <Input
      type="url"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputURL;
