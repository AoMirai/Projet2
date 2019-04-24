import React, { Component } from "react";
import Artist from "./Artist";



class Artists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
    }
  }

  componentDidMount() {
    fetch('http://51.68.18.101:3002/diggnshare/api/recipients')
    .then(res => res.json())
    .then(data => this.setState({ artists: data }) )
  }
  
  render() {
    let artists = this.state.artists
    return (
      <div className="Artists row justify-content-center">
        {artists.map(i => (
          <Artist photo={i.photo} name={i.name} style={i.style} />
        ))}
      </div>
    );
  }
}

export default Artists;
