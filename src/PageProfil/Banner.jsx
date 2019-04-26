import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
      return (
        

        <div className="Banner">
            <div class="image">
                <img src='image/band.jpg' className='band' alt="band"/>
            </div>
            <ul>
            <li>NOM DU GROUPE</li>
            <li>STYLE DE MUSIC</li>
            </ul>
        
        
        </div>
  
      );
    }
}


export default Banner;
