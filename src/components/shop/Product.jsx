import React from "react";
import { useNavigate } from "react-router";
// import productImage from "../../images/product1.jpg";

const ProductItem = ({ data }) => {
  // const data = [
  //   {
  //     id: 1,
  //     src: productImage,
  //     price: "1000",
  //     itemName: "shfksdfnksdnvk",
  //   },
  //   {
  //     id: 2,
  //     src: productImage,
  //     price: "1000",
  //     itemName: "shfksdfnksdnvk",
  //   },
  //   {
  //     id: 3,
  //     src: productImage,
  //     price: "1000",
  //     itemName: "shfksdfnksdnvk",
  //   },
  //   {
  //     id: 4,
  //     src: productImage,
  //     price: "1000",
  //     itemName: "shfksdfnksdnvk",
  //   },
  // ];
  const navigate = useNavigate();
  const handleClicktoId = () => {
    navigate("/singleproduct");
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[100%] md:w-[90%]  bg-white py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={handleClicktoId}
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
            <div className="py-3 px-5">
              <button className="text-2xl font-semibold bg-teal-600 text-white hover:bg-teal-800 cursor-pointer py-2 w-full text-center rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
