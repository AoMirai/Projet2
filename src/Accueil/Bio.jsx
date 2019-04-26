import React, {Component} from 'react'
import './Bio.css'

class Bio extends Component {
    render() {
        return ( 
            <div className= "Bio">
                <img src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt='concert'/>
                <div className="text">
                    <p>	Avec Digg'n Share, les professionnels de la musique s’invitent chez vous !</p>
                    <p> Bookez dès maintenant vos artistes et collectifs préférés du moment </p>
                </div> 
            </div>
            )
    }
}

export default Bio