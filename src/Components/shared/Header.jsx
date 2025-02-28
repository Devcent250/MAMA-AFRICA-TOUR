import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-slate-600 py-3 z-50 font-coolvetica">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span className="flex items-center">
            <FaPhone className="mr-2" /> +250 788 784 023 906
          </span>
          <span className="flex items-center md:mt-0 mt-2">
            <FaEnvelope className="mr-2" /> mamafricatour1@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
