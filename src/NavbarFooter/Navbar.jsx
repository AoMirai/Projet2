import React from 'react';
import Logo from '../image/lg.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './Navbar.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className= "Navigation">
        <Navbar color="light" light expand="md">
          <img src = {Logo} className="Logo" alt ="logo"/>   
          <NavbarBrand href="/">Digg'n Share</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Acceuil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Artistes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Nous Contacter</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Se Connecter
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Utilisateur
                  </DropdownItem>
                  <DropdownItem>
                    Administrateur
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}