import React, { useState } from "react";
import { cardsData } from "./constants/mockedData";
import Total from "./components/total";
import Header from "./components/header";
import ProductList from "./components/product-list";

function App() {
  const initialTotal = cardsData.reduce((acc, card) => acc + card.amount, 0);
  const [total, setTotal] = useState(initialTotal);

  const handleAmountChange = (amount) => {
    setTotal((prevTotal) => prevTotal + amount);
  };

  return (
    <div className="bg-secondary flex min-h-screen flex-col items-center justify-center pb-12">
      <Header title="Tourmaline Soaps" />
      <ProductList
        products={cardsData}
        handleAmountChange={handleAmountChange}
      />
      <Total total={total} />
    </div>
  );
}

export default App;
