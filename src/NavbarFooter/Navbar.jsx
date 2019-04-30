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
  import { NavLink } from "react-router-dom";

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
        <Navbar expand="md" color="light" light sticky="top" className="Navigation">
          <img src='image/lg.png'  className="Logo" alt ="logo"/>   
          <NavbarBrand href="/">Digg'n Share</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" className="link" activeClassName="active">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Index" className="link" activeClassName="active">Artistes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/newpresta/1" className="link" activeClassName="active">S'inscrire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/pageContact" className="link" activeClassName="active">Nous Contacter</NavLink>
              </NavItem>
              <NavItem>
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
                <NavLink to="/admin" className="link" activeClassName="active">Admin</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}