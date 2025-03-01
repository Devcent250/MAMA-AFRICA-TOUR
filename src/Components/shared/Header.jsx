import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-green-500 py-2 lg:py-0 z-50 font-coolvetica shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 font-semibold text-sm">
        
        {/* Left-aligned Email */}
        <span className="flex items-center">
          <FaEnvelope className="mr-2" /> mamafricatour1@gmail.com
        </span>

        {/* Right-aligned Phone */}
        <span className="flex items-center">
          <FaPhone className="mr-2" /> +250 788 784 023 906
        </span>
      </div>
    </div>
  );
};

export default Header;
