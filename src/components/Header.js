/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="data:image/jpeg;base64,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" height="40" width="40" alt="logo" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" />
                    {' '}
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg" />
                    {' '}
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-phone fa-lg" />
                    {' '}
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Restaurant Rixos</h1>
                <p>
                  We take inspiration from the
                  best cuisines, and create a unique fusion experience.Text text text ewedsadalsd;l!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
