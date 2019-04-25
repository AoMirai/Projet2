import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";
import Prestaform1 from "./PrestaForm1/PrestaForm";
import Prestaform2 from "./prestaform2/Prestaform2";
import Index from "./Index/Index";
import Profil from './PageProfil/Profil'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path="/"/>
            <Route path="/newpresta/1" component={Prestaform1} />
            <Route path="/newpresta/2" component={Prestaform2} />
            <Route path="/Index" component={Index} />
            <Route path="/profil/1" component={Profil} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
