import React, {Component} from 'react';
import Description from './Description';
import './Profil.css';
import Banner from './Banner';
import Playlist from './Playlist';
import ContactArtist from './ContactArtist'

//OBJET pour sumiler un affichage
const fakeProfil = 
  {
    name: 'Coucou', 
    styles: ['Pop', 'Rock', 'Metal'],
    banner: 'img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam vero quis ratione animi a nulla voluptates natus beatae facere, molestias amet ducimus accusantium, dolorem quibusdam iure quod alias ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam vero quis ratione animi a nulla voluptates natus beatae facere, molestias amet ducimus accusantium, dolorem quibusdam iure quod alias ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam vero quis ratione animi a nulla voluptates natus beatae facere, molestias amet ducimus accusantium, dolorem quibusdam iure quod alias ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam vero quis ratione animi a nulla voluptates natus beatae facere, molestias amet ducimus accusantium, dolorem quibusdam iure quod alias ullam?',
    playlist: ['https://www.youtube.com/watch?v=dlFA0Zq1k2A&list=RDdlFA0Zq1k2A&start_radio=1', 'https://www.youtube.com/watch?v=2vjPBrBU-TM', 'https://www.youtube.com/watch?v=OI3shBXlqsw'],
    planing: [''] 
  }

class Profil extends Component {
render(){
  return (
    <div className="Profil">
    <Banner />
    
    {/*Comme mon fakeProfil est un objet, et que je n'ai besoin que de l'element description pour le composant Description, 
      je n'appelle que l'element description */}
    <Description description = {fakeProfil.description}/>
    <Playlist />
    <ContactArtist />
    </div>
  )
}

}
export default Profil;