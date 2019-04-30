import React, { Component } from 'react';
import Demande from './Demande'

class Demandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demandes: [],
            confirmed: [],

        }
    }
    componentDidMount() {
        const demandes = this.state.demandes
        fetch("http://51.68.18.101:3002/diggnshare/api/recipients")
            .then(response => response.json())
            .then(demandes => {
                this.setState({
                    demandes,
                })
            })
    }
    confirmedFilter = (demande) => {
        for (let i = 0; i < this.state.confirmed.length; i++) {
            if (demande.id === this.state.confirmed[i]) {
                return false
            }
        }
        return true
        
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
    isConfirmed = (id) => {
        this.setState({confirmed: [...this.state.confirmed, id]})
    }
    render() {
        const demandes = this.state.demandes
        return (
            <div className="Demandes">
                <h5>Les dernières Demandes</h5>
                {demandes.filter(this.confirmedFilter).map((demande, index) =>
                    <Demande key={index} demande={demande} supprProfil={this.supprProfil} isConfirmed={this.isConfirmed} />
                )
                }
            </div>
        )
    }
}


export default Demandes;
