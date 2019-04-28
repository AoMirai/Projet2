import React, { Component } from 'react'
import './Player.css'

 class Player extends Component {
  render () {
    return (
    <div className="Player">
    <video className="Video" source src="image/Digg2.mp4" type="video/mp4" playsinline autoplay muted loop/>
    </div>
    )
  }
}

export default Player;