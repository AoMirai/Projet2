import React, { Component } from "react";

import Artist from "./Artist";
import './Artists.css'

class Artists extends Component {
  render() {
    return (
      <div className="Artists row">
        {this.props.artists.filter(this.props.confirmedFilterInversed).map(artist => (
          <Artist key={artist.id} artist={artist} className="col-12"/>
        ))}
      </div>
    );
  }
}

export default Artists;
