import React from "react";
const Visibility = ({ children, isVisible }) => (isVisible ? <div>{children}</div> : false);
  
export default Visibility;
