import React from "react";
import classNames from "classnames";

//config

//css

//components
import "./ContactDescription.css";

class ContactDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-description">
        <h1>Szkoła muzyczna</h1>
        <h2>Agnieszka Jamborska</h2>
        <h3>
          <a>adres.email@gmail.com</a>
        </h3>
        <h4>os. Oświecenia 55/61</h4>
        <h4>31-636 Kraków</h4>
        <h4>tel. 502 - 673 - 169</h4>
      </div>
    );
  }
}

export default ContactDescription;
