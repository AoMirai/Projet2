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

  nowIsConfirmed = () => {
    const id = this.props.demande.id
    this.props.isConfirmed(id)

  }
  nowSupprProfil = () => {
    const id = this.props.demande.id;
    this.props.supprProfil(id)
  }
  
  render() {
    return (

      <div className="Demande" >
        <Collapse className="resume-button" onClick={this.toggle} isOpen={!this.state.collapse}>
        <div className="name">{this.props.demande.name}</div>
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
              
            
              
            </div>
            {(this.props.demande.playlist).includes("<iframe") ? this.props.demande.playlist : 
            this.props.demande.playlist !== "" 
            ? <iframe title={this.props.demande.name} width="500" height="300" scrolling="no" frameborder="no" allow="autoplay" src={this.props.demande.playlist}></iframe>
            :""
          }
            <div className="buttons">
              <button className="accepter" onClick={this.nowIsConfirmed} >Accepter</button>
              <button className="refuser" onClick={this.nowSupprProfil}>Refuser</button>
            </div>
          </div>

        </Collapse>
      </div>

    )
  };
}

export default Demande