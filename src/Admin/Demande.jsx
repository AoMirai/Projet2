import React, { Component } from 'react';
import { Collapse } from 'reactstrap'
import './Demande.css'

class Demande extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false,
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  supprProfil = () => {
    const id = this.props.demande.id
    const config = {
        method: "DELETE"
      };
    const url = "http://51.68.18.101:3002/diggnshare/api/recipients";
fetch(url + '/' + id, config)
.then(response => response.json());
}
isConfirmed = () => {
  this.props.confirmed.push(this.props.demande.id)
}
  render() {
    return (

      <div className="Demande" >
        <Collapse className="resume-button" onClick={this.toggle} isOpen={!this.state.collapse}>
        <ul> 
                <li>Groupe : {this.props.demande.name}</li> 
             <li>Membre(s): {this.props.demande.member}</li> 
             <li>Style : {this.props.demande.style}</li> 
                </ul>
        </Collapse>
        <Collapse isOpen={this.state.collapse}>
          <div className="contenu-demande">
            
            <div className="banner">
              <img src={this.props.demande.photo} alt=""  onClick={this.toggle}/>
              <ul> 
                <li>Groupe : {this.props.demande.name}</li> 
             <li>Membre(s): {this.props.demande.member}</li> 
             <li>Style : {this.props.demande.style}</li> 
             <li>Prix : {this.props.demande.price}</li> 
                </ul>
            </div>
            <div className="descr-play">
              <div>
                <h3>Description :</h3>
            <p>
              {this.props.demande.description}
            </p>
              </div>
              
            <iframe title={this.props.demande.name} width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={this.props.demande.playlist}></iframe>
              
            </div>
            <div className="buttons">
              <button className="accepter" onClick={this.isConfirmed} >Accepter</button>
              <button className="refuser" onClick={this.supprProfil}>Refuser</button>
            </div>
          </div>

        </Collapse>
      </div>

    )
  };
}

export default Demande