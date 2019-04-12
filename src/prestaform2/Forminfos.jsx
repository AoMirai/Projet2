import React, { Component } from 'react';

import Formbanner from './Formbanner';
import Formdesc from './Formdesc';
import Formplaylist from './Formplaylist';

import './Forminfos.css';

class Forminfos extends Component {
    render() {
      return (
        <div className="Forminfos">
          <Formbanner />
          <Formdesc />
          <Formplaylist />
        </div>
      );
    }
  }

  export default Forminfos;