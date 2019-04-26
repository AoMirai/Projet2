import React, { Component } from "react";
import { InputGroup, InputGroupAddon, FormGroup, Label, Input, Button } from 'reactstrap';

const FormContact = (props) => {
  return (
    <div className="Form">
    <div className="formulairea">
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="Name :" />
      </InputGroup>
      </div>
      <br />
      <div className="formulaireb">
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="Surname :" />
      </InputGroup>
      </div>
      <br />
      <div className="formulairec">
        <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input placeholder="@ :" />
      </InputGroup>
      </div>
      <br />
      <FormGroup>
          <Label for="exampleText">Votre Commentaire :</Label>
          <Input type="Votre Commentaire :"  name="text" id="exampleText"  />
        </FormGroup>
        
        <div className="buton"><Button color="primary">Send</Button>{' '}</div>
    </div>
    
  )
  }

export default FormContact;