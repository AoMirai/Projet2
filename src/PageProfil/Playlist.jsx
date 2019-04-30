import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
    render() {
      return (
        <div className="Playlist">
          <iframe title={this.props.name} className="play" scrolling="no" frameborder="no" allow="autoplay" src={this.props.playlist}></iframe>
        </div>
        
      );
    }
}








export default Playlist;