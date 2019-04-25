import React, { Component } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import "./Formplaylist.css";

class Formplaylist extends Component {
  render() {
    return (
      <div className="Formplaylist">
          <div className="guide">
            <p>
              Pour incorporé votre playlist spotify ou soundcloud vous devez
              inscrire le lien embed de celle-ci, qui ets sous forme:
              iframe.../iframe.
              <br />
              Pour le récupérer faites comme ci-dessous:{" "}
            </p>
            <img
              src="https://i.imgur.com/dL0J1XZ.png"
              alt="guide"
              className="ImgGuide"
            />
            <img
              src="https://i.imgur.com/riRoSyS.png"
              alt="guide"
              className="ImgGuide"
            />
            <p>
              Ensuite il suffit de récupérer le lien qui se trouve dans le
              "src=" comme ci-dessous:
            </p>
            <img
              src="https://i.imgur.com/O6d8idR.png"
              alt="guide"
              className="img-link"
            />
          </div>
          <FormGroup className="Uri">
            <Label for="playlist">Lien</Label>
            <Input
              value={this.props.playlist}
              onChange={this.props.change}
              type="text"
              name="playlist"
              id="playlist"
              placeholder="Entrer le lien URI"
            />
          </FormGroup>
          <Button className="col-12 Send " onClick={this.props.onSubmit}>Soumettre</Button>{' '}
      </div>
    );
  }
}

export default Formplaylist;
