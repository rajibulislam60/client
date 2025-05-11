import React from "react";
import Container from "./Container";
import insagramImage1 from "../images/instagram-01-320x320.jpg";
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  const images = [1, 2, 3, 4, 5]; // Using a simple array to map over

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {images.map((_, index) => (
            <div
              key={index}
              className="relative group w-[220px] h-[220px] overflow-hidden"
            >
              <img
                src={insagramImage1}
                alt="Instagram"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instagram;
