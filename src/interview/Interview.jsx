import React, { Component } from 'react'
import Carousel from './Carousel'

class Interview extends Component {
    render() {
        return (
            <div className Focus>
                <p>Actifs depuis de nombreuses années sur Bordeaux, les membres du collectif tplt font vivre la scène électronique et la ville à leur manière. Désireux de défendre une ligne artistique à leur image et d’inviter les artistes qu’ils apprécient, le crew trouve un écrin idéal au coeur des Vivres de l’Art. Alors à l’origine des concepts Le Verger/La Serre, tplt anime régulièrement les samedis après-midi des bordelais. Le collectif propose en parallèle des événements inédits en journée et en soirée. À la recherche de fraicheur, ils veulent diversifier la scène et mettre en émulsion les talents locaux. Ils sont également co-fondateur de Déviante, qui propose des événements où la musique qui file pas droit est reine.</p>
                <Carousel />
            </div>
        )
    }
}

export default Interview