import React, { Component } from 'react';
import Demandes from './Demandes';
import Messages from './Messages';


class AdminAcceuil extends Component {
   constructor(props) {
      super(props);
      this.state = {
         demandes: []
      }
   }
  
  componentDidMount() {
      fetch("http://51.68.18.101:3002/diggnshare/api/recipients")
         .then(response => response.json())
         .then(demandes => this.setState({ demandes }))
  }

   render() {
      return (
         <div className="AdminAcceuil">
            <h2>Bienvenue, Administrateur !</h2>

            <p>Vous avez {this.state.demandes.length} demandes en attente.
            Et 5 messages non-lus.
            </p>
            <Demandes 
            isConfirmed={this.props.isConfirmed} 
            confirmedFilter={this.props.confirmedFilter} />
            <Messages 
            suppr={this.props.suppr}
            isSuppr={this.props.isSuppr}
            confirmedFilterSuppr={this.props.confirmedFilterSuppr}/>
            />
         </div>

      )
   }

}

export default AdminAcceuil;
