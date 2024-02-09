import React from "react";
import { GiSoap } from "react-icons/gi";

const Header = ({ title }) => {
  return (
    <div className="bg-primary fixed top-0 flex w-full flex-row justify-start p-2 text-center text-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <GiSoap />
    </div>
  );
};

export default Header;
