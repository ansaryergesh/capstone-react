import React, {Component} from 'react';
import { Navbar, NavbarBrand,Jumbotron,Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
          <React.Fragment>
            <Navbar dark expand='md'>
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className='mr-auto' href="/">
                      <img src='https://i.pinimg.com/originals/a7/62/2e/a7622e9d64921dbe9792d5cf11fca089.png' height='40' width='40' alt='logo'/>
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/menu'><span className='fa fa-info fa-lg'></span> Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/categories'><span className='fa fa-list fa-lg'></span> Categories</NavLink>
                        </NavItem>
                    </Nav>
                  </Collapse>
              </div>
            </Navbar>
            <Jumbotron>
                 <div className="container">
                     <div className="row row-header">
                         <div className="col-12 col-sm-6">
                             <h1>Ristorante con Fusion</h1>
                             <p>We take inspiration from the World's best cuisines, and create a unique fusion experience.Text text text ewedsadalsd;l!</p>
                         </div>
                     </div>
                 </div>
             </Jumbotron>
          </React.Fragment>
        );        
    }
}

export default Header;