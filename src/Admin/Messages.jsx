import React, { Component } from 'react';
import Message from './Message'
import './Messages.css'

const messages = [
    {
        id:1,
        lastname:"Galien",
        firstname:"Jean", 
        email:"j.galien@exemple.fr",
        message:"Bonjour, \n \n Je vous contacte pour savoir s'il serait possible de faire un profil de demande de prestation ? \n Je suis pas mal occupé et je n'ai pas le temps de faire une recherche moi même... \n Donc avez vous envisagé de proposer ce genre de service sur votre site ? \n \n Merci d'avence, \n Jean Galien",
    },{
        id:2,
        lastname:"Frameli",
        firstname:"Annie", 
        email:"annie.frameli@exemple.fr",
        message:"Bonjour, \n \n Je vous contacte pour vous signaler qu'un membre du groupe Gate of Paradise m'a proposé un paiment en nature pour leurs prestation, je trouve ça totalement déplacé et j'aimerai que vous fassiez quelque chose quand à leurs présence sur ce site. \n Je suis pas mal occupé et je n'ai pas le temps de faire une recherche moi même... \n Donc avez vous envisagé de proposer ce genre de service sur votre site ? \n \n Cordialement \n Annie Frameli",
    },{
        id:3,
        lastname:"Montclar",
        firstname:"Flavie", 
        email:"flav45@exemple.fr",
        message:"Salut, \n \n La photo du groupe TPLP c'est une femme nue, et je trouve que ça se fait pas, même si c'est un dessin c'est une offence au corp de la femme et ce ne devrait pas figurer sur un site de paratage comme celui là\n Pouvez vous faire quelque chose pour corriger ça ? \n Parceque franchement c'est pas cool"
    },{
        id:4,
        lastname:"Gonzales",
        firstname:"Tomas", 
        email:"totodu06@exemple.fr",
        message:"Salut \n Pouvez vous me mettre en contact avec le groupe L’Orangeade svp ? \n merci"
    },
]
class Messages extends Component {
    
    render(){
        return(
            <div className="Messages">

            <h4>Messages de contact</h4>
            {messages.filter(this.props.confirmedFilterSuppr).map((message, index) =>
                    <Message key={index} message={message} isSuppr={this.props.isSuppr}/>)
              }
            </div>
            

        )
    }
}

export default Messages; 