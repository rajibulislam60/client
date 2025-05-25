import React from "react";
import productImage from "../../images/product1.jpg";

const ProductItem = () => {
  const data = [
    {
      id: 1,
      src: productImage,
      price: "1000",
      itemName: "shfksdfnksdnvk",
    },
    {
      id: 2,
      src: productImage,
      price: "1000",
      itemName: "shfksdfnksdnvk",
    },
    {
      id: 3,
      src: productImage,
      price: "1000",
      itemName: "shfksdfnksdnvk",
    },
    {
      id: 4,
      src: productImage,
      price: "1000",
      itemName: "shfksdfnksdnvk",
    },
  ];

  return (
    <div className="flex gap-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[100%] md:w-[90%] h-[420px]  bg-white py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="overflow-hidden cursor-pointer">
            <img
              src={item.src}
              alt={item.itemName}
              className="transition-transform duration-300 ease-in-out hover:scale-110 h-[310px] w-full object-cover"
            />
          </div>
          <div className="text-gray-500 mt-3">
            <h4 className="text-xl font-semibold">Price: {item.price} TK</h4>
            <h3 className="text-lg font-semibold">{item.itemName}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
