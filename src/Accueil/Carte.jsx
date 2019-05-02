import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import "./Carte.css";

const Carte = ({ image, title, description }) => {
  return (
    <Link to="/interview" className="Carte col-xs-12 col-md-6 col-lg-4">
        <CardImg className="logo" src={image} />
        <CardBody className="text">
          <CardTitle className="title">{title}</CardTitle>
          <CardText className="description">{description}</CardText>
        </CardBody>
    </Link>
  );
};

export default Carte;
