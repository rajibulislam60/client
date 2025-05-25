import React from "react";
import Container from "./../components/Container";
import ShopCate from "../components/shop/ShopCate";
import Product from "../components/shop/Product";

const Shop = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex gap-4">
          <ShopCate />
          <Product />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
