import React, {Component} from 'react'
import './Bio.css'

class Bio extends Component {
    render() {
        return ( 
            <div className= "Bio">
                <h1 className="infos">Qui sommes nous ?</h1>
                    <p>	Nous sommes deux musiciens passionnés qui avons écumé la scène Bordelaise pendant plusieurs années. Par le biais de ce site, nous avons voulu dans un premier temps, donner de la visibilité aux artistes Bordelais. Puis dans un second temps, faciliter l'échange et la programmation de concerts entre protagonistes. Grâce à Digg'n Share, les professionnels de la musique s’invitent chez vous !
Vous pouvez dès maintenant booker vos artistes et collectifs préférés du moment ! </p>
                <h1 className="focus">Focus on</h1>
            </div>
            )
    }
}

export default Bio