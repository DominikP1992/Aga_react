import React from "react";
import PropTypes from "prop-types";

//components
import SocialBtn from './SocialBtn'; 

//config
import { socialMedia } from "../../config";
import "./FooterBtns.css";

const FooterBtns = () => (
  <div className="footer-btns">
      {socialMedia.map(item => <SocialBtn link={item.link} imgSrc={item.imgSrc} alt={item.alt}/>)}
  </div>
);

export default FooterBtns;
