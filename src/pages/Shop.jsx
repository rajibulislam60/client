import React from "react";
import Container from "./../components/Container";
import ShopCate from "../components/shop/ShopCate";

const Shop = () => {
  return (
    <div className="py-10">
      <Container>
        <div>
          <ShopCate />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
