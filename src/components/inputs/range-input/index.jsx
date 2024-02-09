import React from "react";

const RangeInput = ({ value, onChange, fontValues }) => {
  const rangeValue = fontValues.indexOf(value);

  return (
    <input
      type="range"
      min="0"
      max={fontValues.length - 1}
      step="1"
      value={rangeValue}
      onChange={(e) => onChange(fontValues[e.target.value])}
      className="accent-primary mr-4 flex-1"
    />
  );
};

export default RangeInput;
