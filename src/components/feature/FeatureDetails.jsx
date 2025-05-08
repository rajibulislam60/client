import React from "react";
import { FiBox } from "react-icons/fi";

const FeatureDetails = () => {
  return (
    <div className="text-center w-[24%] p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl text-blue-500 mb-2">
        <FiBox aria-label="Free Shopping Icon" />
      </div>
      <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
      <p className="text-sm text-gray-600">
        Free Shipping for orders over 6,000TK
      </p>
    </div>
  );
};

export default FeatureDetails;
