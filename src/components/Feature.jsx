import React from "react";
import Container from "./Container";
import Title from "./Title";

const Feature = () => {
  return (
    <div className="mt-[80px] mb-[80px]">
      <Container>
        <div>
          <Title
            titleName="Our Featured Products"
            titlePera="Get the skin you want to feel"
          />
        </div>
      </Container>
    </div>
  );
};

export default Feature;
