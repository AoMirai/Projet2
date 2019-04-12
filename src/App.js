import React, { Component } from 'react';
import './App.css';
import Navigation from './NavbarFooter/Navbar';
import Footer from './NavbarFooter/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}


export default App;
