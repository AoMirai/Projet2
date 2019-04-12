import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./Formplaylist.css";

class Formplaylist extends Component {
  render() {
    return (
      <div className="Formplaylist">
        <div className="Guide">
            <p>Pour incorporé votre playlist spotify vous devez inscrire le lien URI de celle-ci.<br />
            Pour le récupérer faites comme ci-dessous: </p>
            <img src="https://i.imgur.com/dL0J1XZ.png" alt="guide" className="ImgGuide" />
        </div>
        <FormGroup className="Uri">
          <Label for="URI">Lien URI</Label>
          <Input
            type="text"
            name="URI"
            id="URI"
            placeholder="Entrer le lien URI"
          />
        </FormGroup>
      </div>
    );
  }
}

export default Formplaylist;
