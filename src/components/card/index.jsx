import React, { useState } from "react";
import Button from "../button";
import { HiPencil } from "react-icons/hi";
import RangeInput from "../inputs/range-input";
import Input from "../inputs/input";

const Card = ({
  initialTitle,
  description,
  price,
  amount,
  image,
  onAmountChange,
}) => {
  const [inputValue, setInputValue] = useState(amount);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [fontSize, setFontSize] = useState(18);

  const handleInputChange = (e) => {
    const newValue = e.target.value ? parseInt(e.target.value, 10) : 0;
    onAmountChange(newValue - inputValue);
    setInputValue(newValue);
  };

  const handleTitleClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  return (
    <div
      style={{ minHeight: "550px" }}
      className="flex w-64 flex-col justify-between rounded-md bg-white p-4 shadow-md"
    >
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="flex justify-center">
        {isEditing ? (
          <Input
            type="text"
            className="mb-2 w-full max-w-md border-b border-gray-300 text-xl font-bold focus:outline-none"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
          />
        ) : (
          <>
            <h2
              className="font text mb-2 overflow-hidden break-words font-bold"
              style={{ fontSize: `${fontSize}px` }}
            >
              {title}
            </h2>
          </>
        )}
      </div>
      <div className="mb-2 mt-2 flex flex-row justify-between">
        <RangeInput value={fontSize} onChange={handleFontSizeChange} />
        <HiPencil
          className="cursor-pointer text-2xl text-gray-500"
          onClick={handleTitleClick}
        />
      </div>
      <div className="mb-2 mt-2 flex flex-row">
        <p className="mr-4 text-xl font-bold">{"$" + price}</p>
        <Input
          type="number"
          onChange={handleInputChange}
          defaultValue={amount}
          value={inputValue}
          className="mr-2 w-16 border border-gray-300 p-1 text-center"
        />
      </div>
      <p className="mb-2 mt-2 text-gray-600">{description}</p>
      <Button title={"Add to cart"} className="mb-2 mt-2" />
      <button className="mb-4 mt-2 font-medium underline">Learn More</button>
    </div>
  );
};

export default Card;
