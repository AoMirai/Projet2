import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInputUser from "./FormInputUser";
import FormSlide from "./FormSlide";
import "./PrestaForm.css";

class PrestaForm extends Component {
  render() {
    return (
      <div className="Prestaform">
        <FormSlide />
        <FormInputUser
          name={this.props.name}
          photo={this.props.photo} style={this.props.style}
          description={this.props.description} change={this.props.change}
          shareholders={this.props.shareholders}
          handleShareholderNameChange={this.props.handleShareholderNameChange}
          handleAddShareholder={this.props.handleAddShareholder}
          handleRemoveShareholder={this.props.handleRemoveShareholder}
        />
        <Link to="/newpresta/2">
          <button className="Send">Suivant</button>
        </Link>
      </div>
    );
  }
}

export default PrestaForm;
