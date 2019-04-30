import React, {Component} from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <div className="Description">
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
export default Description;