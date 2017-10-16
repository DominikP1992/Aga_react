import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//components
import Header from './components/header/Header';

class Main extends React.Component {
    render() {
        return <h2>To jest strona glowna</h2>;
    }
}



class About extends React.Component {
    render() {
        return (
            <div>
                <h2>O nas</h2>
            </div>
        )
    }
}

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <h2>Gallery</h2>
            </div>
        )
    }
}
class Records extends React.Component {
    render() {
        return (
            <div>
                <h2>Records</h2>
            </div>
        )
    }
}
class Calendar extends React.Component {
    render() {
        return (
            <div>
                <h2>Calendar</h2>
            </div>
        )
    }
}

class Blog extends React.Component {
    render() {
        return (
            <div>
                <h2>Blog</h2>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
            </div>
        )
    }
}



class ErrorPage extends React.Component {
    render() {
        return <div>brak strony</div>
    }
}


class App extends React.Component {
    render() {
        return (

            <BrowserRouter> 
                <div> 
                    <Header/>                 
                    <Switch>
                        <Route exact path='/' component={About} />
                        <Route exact path='/About' component={About} />
                        <Route exact path='/Gallery' component={Gallery} />
                        <Route exact path='/Records' component={Records} />
                        <Route exact path='/Calendar' component={Calendar} />
                        <Route exact path='/Blog' component={Blog} />
                        <Route exact path='/Contact' component={Contact} />
                        <Route exact path='*' component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;



