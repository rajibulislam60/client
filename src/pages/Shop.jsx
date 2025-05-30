import React, { useState } from "react";
import Container from "./../components/Container";
import ShopCate from "../components/shop/ShopCate";
import Product from "../components/shop/Product";
import Pagination from "../components/shop/Pagination";
import productImage1 from "../images/product1.jpg";
import productImage2 from "../images/product2.jpg";

const data = [
  {
    id: 1,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 2,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 3,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 4,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 5,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 6,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 7,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 8,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 9,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 10,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 11,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 12,
    src: productImage1,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 13,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
  {
    id: 14,
    src: productImage2,
    price: "1000",
    itemName: "shfksdfnksdnvk",
  },
];

const Shop = () => {
  const [activePage, setActivePage] = useState(1);
  const productsPerPage = 9;

  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = data.slice(startIndex, endIndex);
  return (
    <div className="py-10">
      <Container>
        <div className="flex gap-4">
          <ShopCate />
          <Product data={paginatedProducts} />
        </div>
        <Pagination
          total={data.length}
          perPage={productsPerPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Container>
    </div>
  );
};

export default Shop;
