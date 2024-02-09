import React from "react";

const Total = ({ total }) => {
  return (
    <div className="bg-primary fixed bottom-4 right-4 flex gap-2 rounded-full px-4 py-2 text-lg font-bold text-white">
      <p>Total: </p>
      <p className="text-xl">{total}</p>
    </div>
  );
};

export default Total;
