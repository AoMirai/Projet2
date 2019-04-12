import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import FormInputUser from './FormInputUser'
import FormSlide from './FormSlide'
import './PrestaForm.css'

class PrestaForm extends Component {
  render() {
    return (
      <div className="Prestaform">
        <FormSlide />
        <FormInputUser />
          <Link to="/newpresta/2" ><button className="Send">Suivant</button></Link>
      </div>
      
    );
  }
}

export default PrestaForm;
