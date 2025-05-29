import React from "react";
import Container from "./../components/Container";
import categoryImage from "../images/instagram-04.jpg";

const Category = () => {
  const data = [
    {
      id: 1,
      image: categoryImage,
      name: "Skin Care",
    },
    {
      id: 2,
      image: categoryImage,
      name: "Skin Care",
    },
    {
      id: 3,
      image: categoryImage,
      name: "Skin Care",
    },
    {
      id: 4,
      image: categoryImage,
      name: "Skin Care",
    },
    {
      id: 5,
      image: categoryImage,
      name: "Skin Care",
    },
  ];
  return (
    <div>
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.id} className="h-[380px] bg-teal-900 text-white">
                <img
                  className="w-full h-[80%] object-cover rounded-bl-full shadow-md"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="h-[20%] flex px-4 items-center text-3xl font-bold">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
