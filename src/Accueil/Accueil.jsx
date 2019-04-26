import React, {Component} from 'react'
import Bio from './Bio'
import Cards from './Cards'
import './Accueil.css';
import Carousel from './Carousel'




class Accueil extends Component {
    render() {
        return (
        <div className= "Acceuil">
        <Bio />
        <Cards />
        </div>
        )
    }
}

export default Accueil;