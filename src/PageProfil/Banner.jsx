import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
      return (
        

        <div className="Banner">
            <div class="image">
                <img src={this.props.photo} className='band' alt="band"/>
            </div>
            <ul>
            <li>{this.props.name}</li>
            <li>{this.props.style}</li>
            </ul>
        
        
        </div>
  
      );
    }
}


export default Banner;
