import React, { Component } from 'react'
import './Player.css'

 class Player extends Component {
  render () {
    return (
    <div className="Player">
      <video className="video" source src="image/Digg2.mp4" type="video/mp4" playsinline autoPlay muted loop/>
      <h2>Vos nuits ont des oreilles</h2>
    </div>
    )
  }
}

export default Player;