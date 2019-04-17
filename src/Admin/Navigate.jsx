import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
import './Navigate.css'

export default class Navigate extends React.Component {
  render() {
    return (
      <div className="Navigate"> 
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <Link to="/admin/semaine">Semaine</Link>
          </NavItem>
          <NavItem>
            <Link to="/admin/signalements">Signalements</Link>
          </NavItem>
          <NavItem>
            <Link to="/admin/demandes">Demandes</Link>
          </NavItem>
          <NavItem>
            <Link to="/admin/historique">Historique</Link>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}