import React, { Component } from 'react';
import Demande from './Demande'
import './Demandes.css'

class Demandes extends Component {
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


    supprProfil = (id) => {
        const config = {
            method: "DELETE"
          };
        const url = "http://51.68.18.101:3002/diggnshare/api/recipients";
    fetch(url + '/' + id, config)
    .then(response => response.json());
    this.setState({confirmed: [...this.state.confirmed, id]})
    }
    
    render() {
        return (
            <div className="Demandes">
                <h4>Les dernières Demandes</h4>
                {this.props.demandes.filter(this.props.confirmedFilter).map((demande, index) =>
                    <Demande key={index} demande={demande} supprProfil={this.supprProfil} isConfirmed={this.props.isConfirmed} />
                )
                }
            </div>
        )
    }
}


export default Demandes;
