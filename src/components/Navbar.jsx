import React from "react";
import Container from "./Container";
import logoImage from "../images/logo3.png";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="py-2">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-28 items-center">
            <div>
              <img className="w-26" src={logoImage} alt="Logo Image" />
            </div>
            <div className="flex gap-10">
              <Link to="/">
                <h3 className="uppercase text-2xl md:text-xl font-semibold hover:text-[#C09B61]">
                  Home
                </h3>
              </Link>
              <Link to="/category">
                <h3 className="uppercase text-2xl md:text-xl font-semibold hover:text-[#C09B61]">
                  Category
                </h3>
              </Link>
              <Link to="/shop">
                <h3 className="uppercase text-2xl md:text-xl font-semibold hover:text-[#C09B61]">
                  Shop
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-[28px] hover:text-[#C09B61]">
              <IoSearch />
            </div>
            <div className="text-[28px] hover:text-[#C09B61]">
              <VscAccount />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
