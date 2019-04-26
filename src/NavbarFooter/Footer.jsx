import React from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

function Footer(props) {
    return(
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="link col-4">
                        <h5>Nos liens</h5>
                        <ul className="list-unstyled">
                            <Link  to="/">Acceuil</Link>
                            <li><a href=" ">Artistes</a></li>
                            <li><a href=" ">Nous Contacter</a></li>
                            <li><a href=" ">Se Connecter</a></li>
                            <li><a href=" ">Conditions Générales d'Utilisation</a></li>
                        </ul>
                    </div>
                    <div className="adress col-4">
                        <h5>Nos Coordonnées</h5>
                        9 Allée Serr<br />
                        33100 Bordeaux<br />
                        <i className="fa fa-phone fa-lg"></i>05 54 36 67 51<br />
                        <i className="fa fa-envelope fa-lg"></i>DiggnShare@gmail.com<br />
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <SocialIcon url="http://twitter.com/jaketrent" />
                            <SocialIcon url="http://facebook.com" />
                            <SocialIcon url="http://linkedin.com" />
                            <SocialIcon url="http://gmail.com" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>@ Copyright 2019 Digg'N Share</p>
                </div>
            </div>   
        </div>
    );
}

export default Footer;

