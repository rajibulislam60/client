import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button className="px-4 py-2 cursor-pointer hover:bg-teal-700 hover:text-white border rounded-md">
        Prev
      </button>

      <ul className="flex items-center gap-2">
        <li className="px-3 py-2 border rounded-md bg-teal-700 text-white cursor-pointer">
          1
        </li>
        <li className="px-3 py-2 border rounded-md hover:bg-gray-200 cursor-pointer">
          2
        </li>
        <li className="px-3 py-2 border rounded-md hover:bg-gray-200 cursor-pointer">
          3
        </li>
      </ul>

      <button className="px-4 py-2 cursor-pointer hover:bg-teal-700 hover:text-white border rounded-md">
        Next
      </button>
    </div>
  );
};

export default Pagination;
