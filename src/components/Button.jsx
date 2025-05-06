import React from "react";

const Button = ({ btnName, className }) => {
  return (
    <button
      className={`px-6 py-3 text-3xl font-semibold rounded-md ${className}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
