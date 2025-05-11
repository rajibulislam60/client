import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Company</h4>
            <p>
              Find a location nearest you. <br /> See Our Stores
            </p>
            <h5>+880 1981-869112</h5>
            <h6>rajelissebeauty@gmail.com</h6>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Useful Links</h4>
            <ul className="text-gray-500">
              <li>New Products</li>
              <li>Best Sellers</li>
              <li>Bundle & Save</li>
              <li>Online Gift Card</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Information</h4>
            <ul className="text-gray-500">
              <li>Start a Return</li>
              <li>Contact Us</li>
              <li>Shipping FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
