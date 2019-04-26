import React, {Component} from 'react';
import Banner from './Banner';
import Description from './Description';
import Medias from './Medias.jsx'
import ContactA from './ContactArtist';

import './Profil.css';
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
    <Description description = {fakeProfil.description}/>
    <Medias/>
    <ContactA/>
  
    </div>
  )
}

}
export default Profil;