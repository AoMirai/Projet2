import React from 'react';
import { Card, CardBody,  CardTitle, CardText, CardImg } from 'reactstrap';
import './Carte.css';

const Carte = ({image, title, description,}) => {
  return (
      <Card className="Carte col-xs-12 col-md-6 col-lg-4">
        <CardImg className="logo" src={image}/>
        <CardBody className="text">
          <CardTitle className="title">{title}</CardTitle>
          <CardText className="description">{description}</CardText>
        </CardBody>
      </Card>
  );
};

export default Carte