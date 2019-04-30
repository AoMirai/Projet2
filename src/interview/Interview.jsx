import React, { Component } from 'react'
import Carousel from './Carousel'
import  './Interview.css'

class Interview extends Component {
    render() {
        return (
            <div className="Interview">
            <div className="focus row"> 
                <img className="img1 col-xs-5 col-md-5 col-lg-5" src="image/img-interview.jpg" alt="concert" height="300" width="00px"/>
                <p className="text col-xs-12 col-md-12 col-lg-7" ><span>A</span>ctifs depuis de nombreuses années sur Bordeaux, les membres du collectif tplt font vivre la scène électronique et la ville à leur manière. Désireux de défendre une ligne artistique à leur image et d’inviter les artistes qu’ils apprécient, le crew trouve un écrin idéal au coeur des Vivres de l’Art. Alors à l’origine des concepts Le Verger/La Serre, tplt anime régulièrement les samedis après-midi des bordelais. Le collectif propose en parallèle des événements inédits en journée et en soirée. À la recherche de fraicheur, ils veulent diversifier la scène et mettre en émulsion les talents locaux. Ils sont également co-fondateur de Déviante, qui propose des événements où la musique qui file pas droit est reine. L’histoire de tplt démarre en octobre 2012. Charl, Superlate, Yougo et Thibault entendent alors défendre une certaine ligne artistique ainsi que fédérer autour d’eux les artistes d’une scène locale parfois un peu dispersée. Avec la création du Bootleg en 2013, le collectif trouve rapidement un lieu adéquat pour la mise en place de leur soirées.</p>

                <p className="text" ><span>T</span>oujours désireux d’organiser des évènements et de promouvoir et soutenir les artistes qu’ils apprécient, les membres du collectif vont trouver dans Les Vivres de l’Art un écrin rêvé pour prolonger des festivités devenues impossibles au Bootleg. Avec Le Verger, ils proposent un format (le samedi après-midi jusqu’en début de soirées) inédit à Bordeaux, dans un cadre idéal. L’hiver venu, c’est l’intérieur de la galerie d’art qui sera investie par l’équipe, avec La Serre et Le Salon. Deux formats qui verront défiler un grand nombre d’artistes, toujours dans un esprit de défrichage : Sadar Bahar, Jamie Tiller ou bien Interstellar Funk… Cet été, tplt a même passé un cap avec l’organisation de son propre festival : Le Verger Festival (avec Tornado Wallace, Jayda G, Orpheu The Wizard, Dopplereffekt, The Pilotwings…).
                Particulièrement actif sur Bordeaux, tplt s’est fait en 6 ans une place de choix dans le game local et hexagonal, à travers différents formats et propositions artistiques.</p><p className="text">
                <span>C</span>’est d’abord Le Verger et La Serre, deux événements ayant su imposer une nouvelle rythmique festive en ville, avec des teufs organisées en après-midi aux Vivres de l’Art. Avec le succès significatif rencontré par le concept, le collectif s’est même essayé à l’exercice du festival, en 2017, avec un casting impeccable de diggers européens et d’ailleurs (Tornado Wallace, Orpheu The Wizard, …). On peut également retrouver tplt derrière les soirées Déviante, consacrées aux musiques « qui ne filent pas droit », généralement programmés au Void.</p>
                
                <Carousel />
            </div>
            </div>
        )
    }
}

export default Interview