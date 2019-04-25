import React, { Component } from "react";
import Artist from "./Artist";

class Artists extends Component {
  render() {
    return (
      <div className="Artists row justify-content-center">
        {this.props.artists.map(artist => (
          <Artist key={artist.id} photo={artist.photo} name={artist.name} style={artist.style} />
        ))}
      </div>
    );
  }
}

export default Artists;
