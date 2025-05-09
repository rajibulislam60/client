import React from "react";
import HeroPart from "../components/HeroPart";
import Feature from "../components/Feature";
import Costumer from "../components/Costumer";
import Discover from "../components/Discover";

const Home = () => {
  return (
    <div>
      <HeroPart />
      <Feature />
      <Costumer />
      <Discover />
    </div>
  );
};

export default Home;
