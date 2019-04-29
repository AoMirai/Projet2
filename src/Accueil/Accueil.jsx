import React, {Component} from 'react'
import Bio from './Bio'
import Cards from './Cards'
import './Accueil.css';
import Player from './Player'




class Accueil extends Component {
    render() {
        return (
        <div className= "Acceuil">
        <Player />
        <Bio />
        <Cards />
        </div>
        )
    }
}

export default Accueil;