import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import FormAddPerson from "./FormAddPerson";
import "./FormInputUser.css";

export default class FormInputUser extends React.Component {
  render() {
    return (
      <div className="FormInputUser">
        <Form className="bloc-input column">
          <h4 className="col-12">Informations utilisateur(s)</h4>
          <FormGroup className="col-12">
            <Label for="exampleEmail">Nom d'utilisateur</Label>
            <Input type="user" name="user" id="exampleuser" />
          </FormGroup>
          <FormGroup className="col-12">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup className="col-12">
            <Label for="examplePassword">Mot de passe</Label>
            <Input type="Password" name="Password" id="examplePassword" />
          </FormGroup>
          <FormGroup className="col-12">
            <Label for="exampleEmail">Confirmer le mot de passe</Label>
            <Input
              type="Password"
              name="Confirm Password"
              id="exampleConfirm Password"
            />
          </FormGroup>
          <FormAddPerson />
        </Form>
      </div>
    );
  }
}
