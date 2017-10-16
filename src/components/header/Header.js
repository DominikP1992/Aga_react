import React from "react";
import classNames from 'classnames';
import { imgSrc, isMobile } from "../../config";

//components
import NavigationBar from "./NavigationBar";
import './Header.css';
import logo from '../../assets/img/Agnes.png';


const logoPath = "Agnes.png";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: false
    };
  }
  closeMenu = input => {
    console.log(input)
   return this.setState({
      isClose: input
    });
  };

  mediaMenu = () => {
    if (this.state.isClose && isMobile()) {
      return "container__header--closed";
    }
  };
  render() {
    const classes = classNames({
      "header-logo": true,
      "header-logo-open": this.state.isClose,
    });
    return (
      <header>
        <img
          src={logo}
          alt="Agnes"
          className={classes}
        />
        <NavigationBar isClose={this.state.isClose} closeMenu={this.closeMenu} mediaMenu={this.mediaMenu}
        />
      </header>
    );
  }
}

export default Header;
