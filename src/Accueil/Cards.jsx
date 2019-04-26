import React, {Component} from 'react'
import Carte from './Carte'
import './Cards.css'

const cards = [
    {
        image:'image/SD.jpg',
        title: 'Super Daronne',
        description: 'Super Daronne est un collectif bordelais qui œuvre dans la promotion de la culture électronique et urbaine via ses membres RIGO, Junior, Doowi et Taktyle.'
    },
    {
        image: 'image/Tplt.jpg',
        title: 'Template',
        description:'Actifs depuis de nombreuses années sur Bordeaux, les membres du collectif tplt font vivre la scène électronique et la ville à leur manière.'
    },
    {
        image:'image/Orangeade.jpg',
        title: "L'Orangeade",
        description:"Producteur d'évènements musicaux à Bordeaux et en France depuis 2014, le collectif explore des lieux atypiques pour poser ses vinyles. L'Orangeade privilégie la black music et le groove.",
    },
]

class Cards extends Component {
    render() {
        return (
        <div className= 'Cards row'>
            {cards.map( x => (
                <Carte 
                    image={x.image}
                    title={x.title}
                    description={x.description}
                />
            ))}
        </div>
        )
    }
}

export default Cards

