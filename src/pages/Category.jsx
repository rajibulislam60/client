import React from "react";
import Container from "./../components/Container";
import makeupImage from "../images/makeup.avif";
import kBeautyImage from "../images/kbeauty.jpg";
import haircareImage from "../images/haircare.jpeg";
import skincareImage from "../images/skincare.avif";
import facecareImage from "../images/facecare.webp";
import undergarmentsImage from "../images/undergraments.webp";
import perfumeImage from "../images/perfume.jpg";

const Category = () => {
  const data = [
    {
      id: 1,
      image: makeupImage,
      name: "MakeUp",
    },
    {
      id: 2,
      image: kBeautyImage,
      name: "K-Beauty",
    },
    {
      id: 3,
      image: haircareImage,
      name: "Hair Care",
    },
    {
      id: 4,
      image: skincareImage,
      name: "Skin Care",
    },
    {
      id: 5,
      image: facecareImage,
      name: "Face Care",
    },
    {
      id: 6,
      image: undergarmentsImage,
      name: "Undergarments",
    },
    {
      id: 7,
      image: perfumeImage,
      name: "Perfume",
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
