import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to = "/about", text = "Read More" }) => {
  return (
    <Link
      to={to}
      className="
        group inline-flex items-center gap-2
         justify-center capitalize
        px-6 py-3 rounded-xl
       text-primary font-medium
        
        transition-all duration-300 ease-in-out
        border
        
        hover:bg-blue-600
        hover:text-white
        hover:shadow-lg
        hover:-translate-y-1
        
        active:scale-95
        active:shadow-sm
        
        focus:outline-none focus:ring-2 focus:ring-blue-300
        
      "
    >
      {text}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="
          w-5 h-5
          transition-all duration-300
          group-hover:translate-x-1
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
};

export default PrimaryButton;