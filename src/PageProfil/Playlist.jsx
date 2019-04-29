import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
    render() {
      return (
        <div className="playlist">
          <iframe title={this.props.name} width="500" height="300" scrolling="no" frameborder="no" allow="autoplay" src={this.props.playlist}></iframe>
        </div>
        
      );
    }
}








export default Playlist;