import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mainfooter">
      <span id="footer-text">
        Copyright &#169; <b>2021 Shopify Store</b>. All rights Reserved
      </span>
      <div className="footer-block">
        <FaFacebookSquare id="footer-block-1" />
        <FaInstagramSquare id="footer-block-3" />
        <FaLinkedin id="footer-block-2" />
      </div>
    </div>
  );
};

export default Footer;
