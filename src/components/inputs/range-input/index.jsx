import React from "react";

const RangeInput = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="12"
      max="24"
      step="1"
      value={value}
      onChange={onChange}
      className="accent-primary mr-4 flex-1"
    />
  );
};

export default RangeInput;
