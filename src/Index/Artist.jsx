import React from "react";

import { Link } from "react-router-dom";
import "./Artist.css";

const Artist = ({ artist: {id, photo, name, style} }) => (
  <Link exact to={`/profil/${id}`} className="Artist col-xs-12 col-sm-6 col-lg-3 row justify-content-center ">
      <img src={photo} alt="icon" />
      <div className="desc">
        <h2>{name}</h2>
        <p>{style}</p>
      </div>
  </Link>
);

export default Artist;
