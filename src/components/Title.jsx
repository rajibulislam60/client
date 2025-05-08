import React from "react";

const Title = ({ titleName, titlePera }) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold">{titleName}</h3>
      <p className="text-xl font-medium w-[500px] mx-auto text-gray-500 mt-2">
        {titlePera}
      </p>
    </div>
  );
};

export default Title;
