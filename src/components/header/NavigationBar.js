import React from 'react';
import { withRouter } from 'react-router-dom';
import { tabButtons } from '../../config';
import { Navbar } from 'react-bootstrap';
import classNames from 'classnames';


//css
import './NavigationBar.css';
//components

import NavButton from './NavButton';
import NavDisplayBtn from './NavDisplayBtn';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    getNavButton() {
        console.log(this.props.isClose);
        const classes = classNames({
            "navigation-bar":true,
            "navigation-bar-closed":this.props.isClose
        })
        return <Navbar className={classes}>
            <NavDisplayBtn closeMenu={this.props.closeMenu} isClose={this.props.isClose}/>
            {tabButtons.map(elem => <NavButton key={elem} tabName={elem} isClose={this.props.isClose} closeMenu={this.props.closeMenu} />)}
        </Navbar>
    }

    render() {
        return this.getNavButton();
    }
}

export default withRouter(NavigationBar);
