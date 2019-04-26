import React from "react";
import "./FormAddPerson.css";

class FormAddPerson extends React.Component {
  render() {
    return (
      <div className="FormAddPerson">
        <form className="Add">
          <div class="container">
            <h4>Membres</h4>

            {this.props.shareholders.map((shareholder, idx) => (
              <div className="shareholder">
                <input
                  type="text"
                  className="text"
                  placeholder={`Nom et prénom du membre ${idx + 1}`}
                  value={shareholder.name}
                  onChange={(evt) => this.props.handleShareholderNameChange(idx, evt)}
                />
                <button
                  type="button"
                  onClick={() => this.props.handleRemoveShareholder(idx, )}
                  className="small"
                >
                  -
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={this.props.handleAddShareholder}
              className="Addmember"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddPerson;
