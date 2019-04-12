import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./Formdesc.css";

class Formdesc extends Component {
  render() {
    return (
      <div className="Formdesc">
        <FormGroup>
          <Label for="description" sm={2} />
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="A propos de vous..."
          />
        </FormGroup>
      </div>
    );
  }
}

export default Formdesc;
