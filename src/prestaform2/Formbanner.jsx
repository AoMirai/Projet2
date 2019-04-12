import React, { Component } from "react";
import {FormGroup, Label, Input} from "reactstrap";
import "./Formbanner.css";

class Formbanner extends Component {
  render() {
    return (
      <form className=" Formbanner col-12 row">
        <div className="Image col-12">
          <FormGroup className="Importimage">
            <Label for="profil-image">Importer une image</Label>
            <Input type="file" name="file" id="profil-image"/>
          </FormGroup>
        </div>
        <ul className="NameStyle col-12">
          <li>
            <FormGroup className="InputNameStyle">
              <Label for="Name">Nom</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                placeholder="Entrer votre nom"
              />
            </FormGroup>
          </li>
          <li>
            <FormGroup className="InputNameStyle">
              <Label for="style">Style</Label>
              <Input
                type="text"
                name="style"
                id="Style"
                placeholder="Entrer votre style musical"
              />
            </FormGroup>
          </li>
        </ul>
      </form>
    );
  }
}

export default Formbanner;
