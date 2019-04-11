import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import FormAddPerson from './FormAddPerson'
import './FormInputUser.css'

export default class FormInputUser extends React.Component {
  render() {
    return (
      <Form className="bloc-input">
          <h4>Informations utilisateur(s)</h4>
        <FormGroup>
          <Label for="exampleEmail">Nom d'utilisateur</Label>
          <Input
            type="user"
            name="user"
            id="exampleuser"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Mot de passe</Label>
          <Input
            type="Password"
            name="Password"
            id="examplePassword"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Confirmer le mot de passe</Label>
          <Input
            type="Password"
            name="Confirm Password"
            id="exampleConfirm Password"
          />
        </FormGroup>
        <FormAddPerson/>
      </Form>
    );
  }
}


  