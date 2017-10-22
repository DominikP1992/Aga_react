import React from "react";
import PropTypes from "prop-types";

//config
import "./SocialBtn.css";

const SocialBtn = ({ link, imgSrc, alt }) => (
  <div className="social-btn">
    <a href={link} className="social-button-link" alt={alt} target="_blank">
      <img src={imgSrc} alt={alt} />
    </a>
  </div>
);

SocialBtn.propTypes = {
    link:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}

export default SocialBtn;
