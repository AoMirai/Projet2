import React, {Component} from 'react';

class Description extends Component {
  render() {
    const {description} = this.props;
    return (
      <div className="Description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    );
  }
}
export default Description;