import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from "react-router-dom";

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
          <img src='image/lg.png'  className="Logo" alt ="logo"/>   
          <NavbarBrand href="/">Digg'n Share</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="link">Acceuil</Link>
              </NavItem>
              <NavItem>
                <Link to="" className="link">Artistes</Link>
              </NavItem>
              <NavItem>
                <Link to="/newpresta/1" className="link">S'inscrire</Link>
              </NavItem>
              <NavItem>
                <Link to="" className="link">Nous Contacter</Link>
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