import React, { Component } from 'react';
import Demande from './Demande'

// const artistes = [
//     {
//         member: ["Suara"],
//         name: "Suara",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     }, {
//         member: ["x", "y", "z"],
//         name: "FLOW",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     }, {
//         member: ["Tia"],
//         name: "Tia",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     }, {
//         member: ["x", "y", "z"],
//         name: "Porno Graffitti",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     }, {
//         member: ["DAOKO"],
//         name: "DAOKO",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     }, {
//         member: ["x", "y", "z"],
//         name: "Unravel",
//         photo: "",
//         banniere: "",
//         description: "",
//         playlist: "",
//         price: "",
//         style: [""],
//     },
// ]


class Demandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demandes: [],
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
        console.log(demandes)
    }

    render() {
        const demandes = this.state.demandes
        console.log(demandes)
        return (
            <div className="Demandes">
                <p>Les dernières Demandes</p>
                {console.log(demandes)}
                {demandes.map((demande, index) =>
                    <Demande key={index} demande={demande}/>
                )
                }
            </div>
        )
    }
}


export default Demandes;