import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="image">
          <img src={this.props.photo} className="band" alt="band" />
        </div>
        <ul>
          <li className="name">{this.props.name}</li>
          <li className="style">{this.props.style}</li>
        </ul>
      </div>
    );
  }
}

export default Banner;
