import React, { Component } from 'react';
import './Demande.css'

class Demande extends Component {
  render() {
    return (
      
      <div className="Demande">
        Groupe : {this.props.demande.name}
        <br/> Membre(s): {this.props.demande.member}
      </div>
    )
  };
}

export default Demande