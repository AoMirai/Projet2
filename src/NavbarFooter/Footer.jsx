import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

function Footer(props) {
    return(
        <div className="Footer">
                    <div className="link col-lg-4">
                        <h5>Nos liens</h5>
                        <ul className="list-unstyled">
                            <li><NavLink  exact to="/">Acceuil</NavLink></li>
                            <li><NavLink  to="/Index">Artistes</NavLink></li>
                            <li><NavLink  to="/pageContact">Nous Contacter</NavLink></li>
                            <li><NavLink  to="/">Se Connecter</NavLink></li>
                            <li><NavLink  to="/">Conditions Générales d'Utilisation</NavLink></li>
                        </ul>
                    </div>
                    <div className="text-center col-xs-12 col-lg-4">
                            <SocialIcon className="icon" url="http://twitter.com/jaketrent" />
                            <SocialIcon className="icon" url="http://facebook.com" />
                            <SocialIcon className="icon" url="http://linkedin.com" />
                            <SocialIcon className="icon" url="http://gmail.com" />
                    </div>
                    <div className="adress col-lg-4">
                        <h5>Nos Coordonnées</h5>
                        9 Allée Serr<br />
                        33100 Bordeaux<br />
                        <i className="fa fa-phone fa-lg"></i>05 54 36 67 51<br />
                        <i className="fa fa-envelope fa-lg"></i>DiggnShare@gmail.com<br />
                <div>
                    <p>@ Copyright 2019 Digg'N Share</p>
                </div>
            </div>   
        </div>
    );
}

export default Footer;

