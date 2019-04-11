import React, { Component } from 'react'; 
import Prestaform from './PrestaForm1/PrestaForm';
import Prestaform2 from "./prestaform2/Prestaform2";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Prestaform/>
        <Prestaform2 />
      </div>
      
    );
  }
}

export default App;
