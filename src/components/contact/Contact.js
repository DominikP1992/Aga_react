import React from "react";
import classNames from "classnames";

//config

//css

//components
import ContactMap from "./ContactMap";
import ContactDescription from "./ContactDescription";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container contact">
        <ContactDescription/>
        <ContactMap isMarkerShown />
      </section>
    );
  }
}

export default Contact;
