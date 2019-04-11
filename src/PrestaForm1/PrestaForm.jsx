import React, { Component } from 'react'; 
import FormInputUser from './FormInputUser'
import FormSlide from './FormSlide'
import './PrestaForm.css'

class PrestaForm extends Component {
  render() {
    return (
      <div className="App">
        <FormSlide />
        <FormInputUser />
      </div>
      
    );
  }
}

export default PrestaForm;
