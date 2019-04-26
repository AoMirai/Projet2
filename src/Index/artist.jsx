import React from "react";
import "./Artist.css";

const Artist = ({ photo, name, style }) => (
  <div className="Artist col-xs-12 col-sm-6 col-lg-3 row justify-content-center">
    <img src={photo} alt="icon" />
    <div className="desc">
      <h2>{name}</h2>
      <p>{style}</p>
    </div>
  </div>
);

export default Artist;
