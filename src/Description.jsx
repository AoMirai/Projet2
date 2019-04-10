import React, {Component} from 'react';

class Description extends Component {
  render() {
    /*Ici, j'assigne la description a un props */
    const {description} = this.props;
    return (
      <div className="Description">
        <h3>Description</h3>
        {/*Pour que je puisse l'appeler ici */}
        <p>{description}</p>
      </div>
    );
  }
}
export default Description;