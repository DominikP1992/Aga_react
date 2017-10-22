import React from "react";
import { withRouter } from "react-router-dom";

//config
import { imgSrc, getTranslate } from "../../config";
import "./NavDisplayBtn.css";

class NavDisplayBtn extends React.Component {
  handlerClick = () => {
    this.props.mobile && this.props.closeMenu(false);
  };

  render() {
    let location = this.props.location.pathname.substring(1);
    if (this.props.location.pathname == "/") {
      location = "About";
    }
    const translatedLocation = getTranslate(location);
    const img = location.toLowerCase() + ".png";
    return (
      <div className="nav-display-btn" onClick={this.handlerClick}>
        <a
          href="javascript:;"
          className="nav-display-btn-link"
          style={{ backgroundImage: `url(${imgSrc + img})` }}
        />
        <div className="nav-display-btn-text">
          <span>{translatedLocation}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(NavDisplayBtn);
