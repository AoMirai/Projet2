import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import FormAddPerson from "./FormAddPerson";
import "./FormInputUser.css";

export default class FormInputUser extends React.Component {
  render() {
    return (
      <div className="FormInputUser">
        <Form className="bloc-input">
          <div className="bloc-inputs">
            <h4 className="col-12">Informations utilisateur(s)</h4>
            <FormGroup className="input col-12">
              <Label for="name">Nom d'utilisateur</Label>
              <Input
                value={this.props.name}
                type="text"
                name="name"
                id="name"
                placeholder="Entrer votre Nom"
                onChange={this.props.change}
              />
            </FormGroup>
            <FormGroup className="input col-12">
              <Label for="photo">Importer un lien d'image</Label>
              <Input
                value={this.props.photo}
                type="text"
                name="photo"
                id="photo"
                placeholder="Entrer votre lien"
                onChange={this.props.change}
              />
            </FormGroup>
            <FormGroup className="input col-12">
              <Label for="style">Style</Label>
              <Input
                value={this.props.style}
                type="text"
                name="style"
                id="Style"
                placeholder="Entrer votre style musical"
                onChange={this.props.change}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="description" sm={2} />
            <Input
              value={this.props.description}
              type="textarea"
              name="description"
              id="description"
              placeholder="A propos de vous..."
              onChange={this.props.change}
            />
          </FormGroup>
          <FormAddPerson
            shareholders={this.props.shareholders}
            handleShareholderNameChange={this.props.handleShareholderNameChange}
            handleAddShareholder={this.props.handleAddShareholder}
            handleRemoveShareholder={this.props.handleRemoveShareholder}
          />
        </Form>
      </div>
    );
  }
}
