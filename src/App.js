import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { mobileWidth } from "./config";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Calendar from "./components/calendar/Calendar";

class Main extends React.Component {
  render() {
    return <h2>To jest strona glowna</h2>;
  }
}

class About extends React.Component {
  render() {
    return (
      <section>
        <h2>O nas</h2>
      </section>
    );
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <section>
        <h2>Gallery</h2>
      </section>
    );
  }
}
class Records extends React.Component {
  render() {
    return (
      <section>
        <h2>Records</h2>
      </section>
    );
  }
}

class Blog extends React.Component {
  render() {
    return (
      <section>
        <h2>Blog</h2>
      </section>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>
      </section>
    );
  }
}

class ErrorPage extends React.Component {
  render() {
    return <section>brak strony</section>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
    this.mobile = window.matchMedia(`screen and (max-width: ${mobileWidth}px`);
  }
  componentDidMount() {
    
    this.isMobile();
    this.mobile.addListener(mobile => {
      this.isMobile();
    });
  }
  isMobile = () => {
    if (this.mobile.matches) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header mobile={this.state.mobile} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Records" component={Records} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="*" component={ErrorPage} /> 
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
