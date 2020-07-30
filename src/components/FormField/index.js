import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {/*{label}: */}
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={label}
        />
      </label>
    </div>
  )
}

export default FormField;