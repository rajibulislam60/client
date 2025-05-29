import React from "react";
import Container from "./../components/Container";
import ShopCate from "../components/shop/ShopCate";
import Product from "../components/shop/Product";
import Pagination from "../components/shop/Pagination";

const Shop = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex gap-4">
          <ShopCate />
          <Product />
        </div>
        <Pagination />
      </Container>
    </div>
  );
};

export default Shop;
