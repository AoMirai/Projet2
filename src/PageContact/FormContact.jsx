import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const FormContact = props => {
  return (
    <div className="FormContact">
      <InputGroup className="forminput">
        <InputGroupAddon addonType="prepend" />
        <Input placeholder="Nom" />
      </InputGroup>
      <InputGroup className="forminput">
        <InputGroupAddon addonType="prepend" />
        <Input placeholder="Prénom" />
      </InputGroup>
      <InputGroup className="forminput">
        <InputGroupAddon addonType="prepend" />
        <Input placeholder="adresse mail" />
      </InputGroup>
      <FormGroup className="forminput">
        <Label for="exampleText">Votre Commentaire :</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <div className="button">
        <Button className="btn">Envoyer</Button>{" "}
      </div>
    </div>
  );
};

export default FormContact;
