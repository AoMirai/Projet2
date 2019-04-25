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
            <NavLink className="link" activeClassName to="/admin/semaine">Semaine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" activeClassName to="/admin/signalements">Signalements</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" activeClassName to="/admin/demandes">Demandes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" activeClassName to="/admin/historique">Historique</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}