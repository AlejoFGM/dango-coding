import React from "react";

const Button = ({ onClick, title, className }) => {
  return (
    <button
      className={`bg-primary rounded px-4 py-2 font-bold text-white ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
