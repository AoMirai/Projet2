import React from "react";
import "./FormAddPerson.css";

class FormAddPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      shareholders: [{ name: "" }]
    };
  }

  handleShareholderNameChange = (idx, evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = (idx, ) => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <div className="FormAddPerson">
        <form onSubmit={this.handleSubmit} className="Add">
          <div class="container">
            <h4>Membres</h4>

            {this.state.shareholders.map((shareholder, idx) => (
              <div className="shareholder">
                <input
                  type="text"
                  className="text"
                  placeholder={`Nom et prénom du membre ${idx + 1}`}
                  value={shareholder.name}
                  onChange={(evt) => this.handleShareholderNameChange(idx, evt)}
                />
                <button
                  type="button"
                  onClick={() => this.handleRemoveShareholder(idx, )}
                  className="small"
                >
                  -
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={this.handleAddShareholder}
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
