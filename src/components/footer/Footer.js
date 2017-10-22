import React from "react";
import classNames from "classnames";

//config
import { socialMedia } from "../../config";
//css
import "./Footer.css";
//components
import FooterBtns from './FooterBtns'; 
import logo from "../../assets/img/Agnes.png";

const Footer = () => (
  <footer className="container__footer">
      <FooterBtns/>
      <img src={""} className="footer__logo" />
  </footer>
);

export default Footer;
