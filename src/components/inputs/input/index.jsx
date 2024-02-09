import React from "react";

const Input = ({ value, onChange, defaultValue, type, className, onBlur }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      defaultValue={defaultValue}
      value={value}
      onBlur={onBlur}
      min={type === "number" ? "0" : undefined}
    />
  );
};

export default Input;
