import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";
import Prestaform1 from "./PrestaForm1/PrestaForm";
import Prestaform2 from "./prestaform2/Prestaform2";
import Profil from './PageProfil/Profil'
import AdminAcceuil from "./Admin/AdminAcceuil";

import Navigate from './Admin/Navigate';

import Semaine from './Admin/Semaine';
import Demandes from './Admin/Demandes';
import Historique from './Admin/Historique';
import Signalements from './Admin/Signalements';

import './Admin/Admin.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" />
            <Route path="/newpresta/1" component={Prestaform1} />
            <Route path="/newpresta/2" component={Prestaform2} />
            <Route path="/profil/1" component={Profil} />

            <Route path="/admin" render={() => (
              <div className="Admin">
                <Navigate />
                <Route exact path="/admin" component={AdminAcceuil} />
                <Route path="/admin/semaine" component={Semaine} />
                <Route path="/admin/signalements" component={Signalements} />
                <Route path="/admin/demandes" component={Demandes} />
                <Route path="/admin/historique" component={Historique} />
              </div>
            )} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
