import React, { Component } from 'react';


import Formplaylist from './Formplaylist';
import Slideform from './Slideform';

import './Prestaform2.css';

class Prestaform2 extends Component {
    render() {
      return (
        <div className="Prestaform2">
          <Slideform />
          <Formplaylist playlist={this.props.playlist} change={this.props.change} onSubmit={this.props.onSubmit}/>
        </div>
      );
    }
  }

  export default Prestaform2;