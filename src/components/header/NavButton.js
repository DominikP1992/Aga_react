import React from "react";
import { withRouter } from "react-router-dom";
import { Col } from "react-bootstrap";
//config
import { imgSrc, getTranslate } from "../../config";
import "./NavButton.css";

class NavButton extends React.Component {
  handlerClick = e => {
    const currentTab = "/" + this.props.tabName;
    this.props.location.pathname != currentTab &&
      this.props.history.push(currentTab);
      this.props.closeMenu(true);
  };
  render() {
    const translatedLocation = getTranslate(this.props.tabName);
    const img = this.props.tabName.toLowerCase() + ".png";
    return (
      <Col xs={2} className={"nav-button"} onClick={this.handlerClick}>
        <div>
          <a
            href="javascript:;"
            className="nav-button-link"
            style={{ backgroundImage: `url(${imgSrc + img})` }}
          />
          <div className="nav-button-text">
            <span>{translatedLocation}</span>
          </div>
        </div>
      </Col>
    );
  }
}

export default withRouter(NavButton);
