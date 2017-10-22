import React from "react";
import classNames from "classnames";
import { imgSrc } from "../../config";

//components
import NavigationBar from "./NavigationBar";
import "./Header.css";
import logo from "../../assets/img/Agnes.png";

const logoPath = "Agnes.png";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: false,
      mobile: this.props.mobile
    };
  }
  componentDidMount() {}
  closeMenu = input => {
    return this.setState({
      isClose: input
    });
  };

  render() {
    const classes = classNames({
      "header-logo": true,
      "header-logo-open": this.state.isClose && this.props.mobile
    });
    return (
      <header>
        <img src={logo} alt="Agnes" className={classes} />
        <NavigationBar
          isClose={this.state.isClose}
          closeMenu={this.closeMenu}
          mobile={this.props.mobile}
        />
      </header>
    );
  }
}

export default Header;
