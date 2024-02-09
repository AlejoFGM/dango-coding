import React from "react";
import Card from "../card";

const ProductList = ({ products, handleAmountChange }) => {
  return (
    <div className="mt-24 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <Card
          key={index}
          initialTitle={product.title}
          description={product.description}
          price={product.price}
          amount={product.amount}
          image={product.image}
          onAmountChange={handleAmountChange}
        />
      ))}
    </div>
  );
};

export default ProductList;
