import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Forminfos from './Forminfos';
import Slideform from './Slideform';

import './Prestaform2.css';

class Prestaform2 extends Component {
    render() {
      return (
        <div className="Prestaform2">
          <Slideform />
          <Forminfos />
          <Button className="Send">Soumettre</Button>{' '}
        </div>
      );
    }
  }

  export default Prestaform2;