import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Total = ({ total }) => {
  return (
    <div className="bg-primary fixed bottom-4 right-4 flex items-center gap-2 rounded-full px-4 py-2 text-lg font-bold text-white">
      <FaShoppingCart />
      <p className="text-xl">{": " + total}</p>
    </div>
  );
};

export default Total;
