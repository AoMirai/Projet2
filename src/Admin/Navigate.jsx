import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './Navigate.css'

export default class Navigate extends React.Component {
  render() {
    return (
      <div className="Navigate"> 
        <Nav vertical>
          <NavItem>
            <NavLink className="link" activeClassName exact to="/admin">Acceuil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" activeClassName to="/admin/demandes">Demandes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" activeClassName to="/admin/messages">Messages</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}