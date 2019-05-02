import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";
import Accueil from "./Accueil/Accueil";
import Prestaform1 from "./PrestaForm1/PrestaForm";
import Prestaform2 from "./prestaform2/Prestaform2";
import Index from "./Index/Index";
import Profil from "./PageProfil/Profil";
import AdminAccueil from "./Admin/AdminAccueil";
import Interview from "./interview/Interview";

import Navigate from "./Admin/Navigate";

import Demandes from "./Admin/Demandes";
import Messages from "./Admin/Messages";

import "./Admin/Admin.css";

import PageContact from "./PageContact/PageContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      shareholders: [{ name: "" }],
      name: "",
      photo: "",
      planning: "",
      playlist: "",
      price: 120,
      style: "",
      confirmed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 31],
      suppr:[],
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleShareholderNameChange = (idx, evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { shareholders, ...artist } = this.state;
    artist.member = shareholders.map(m => m.name).join(",");
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(artist)
    };
    const url = "http://51.68.18.101:3002/diggnshare/api/recipients/";
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Votre prestation à été enregistrée correctement!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout de votre prestation.");
      });
  };


  confirmedFilter = (demande) => {
    for (let i = 0; i < this.state.confirmed.length; i++) {
      if (demande.id === this.state.confirmed[i]) {
        return false
      }
    }
    return true

  }

  confirmedFilterInversed = (demande) => {
    for (let i = 0; i < this.state.confirmed.length; i++) {
      if (demande.id === this.state.confirmed[i]) {
        return true
      }
    }
    return false
  }

  isConfirmed = (id) => {
    this.setState({ confirmed: [...this.state.confirmed, id] })
  }

  isSuppr = (id) => {
    this.setState({suppr: [...this.state.suppr, id]})
  }
  confirmedFilterSuppr = (message) => {
    for (let i = 0; i < this.state.suppr.length; i++) {
        if (message.id === this.state.suppr[i]) {
            return false
        }
    }
    return true
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route
              path="/newpresta/1"
              render={() => (
                <Prestaform1
                  name={this.state.name}
                  photo={this.state.photo}
                  style={this.state.style}
                  description={this.state.description}
                  change={this.onChange}
                  shareholders={this.state.shareholders}
                  handleShareholderNameChange={this.handleShareholderNameChange}
                  handleAddShareholder={this.handleAddShareholder}
                  handleRemoveShareholder={this.handleRemoveShareholder}
                />
              )}
            />
            <Route
              path="/newpresta/2"
              render={() => (
                <Prestaform2
                  playlist={this.state.playlist}
                  change={this.onChange}
                  onSubmit={this.submitForm}
                />
              )}
            />
            <Route path="/profil/:id" component={Profil} />
            <Route path="/index" render={() => (
              <Index 
                isConfirmed={this.isConfirmed} 
                confirmedFilterInversed={this.confirmedFilterInversed}/>)} />
            <Route path="/pageContact" component={PageContact} />
            <Route path="/interview" component={Interview} />
            <Route
              path="/admin"
              render={() => (
                <div className="Admin">
                  <Navigate />
                  <Route exact path="/admin" render={() => (
                    <AdminAccueil 
                      isSuppr={this.isSuppr}
                      confirmedFilterSuppr={this.confirmedFilterSuppr}
                      isConfirmed={this.isConfirmed} 
                      confirmedFilter={this.confirmedFilter}/>)} />
                  <Route path="/admin/demandes" render={() => (
                    <Demandes 
                      confirmed={this.state.confirmed}
                      isConfirmed={this.isConfirmed} 
                      confirmedFilter={this.confirmedFilter}/>)} />
                  <Route path="/admin/messages" render={() => (
                    <Messages 
                      suppr={this.state.suppr}
                      isSuppr={this.isSuppr}
                      confirmedFilterSuppr={this.confirmedFilterSuppr}/>)} />
                </div>
              )}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
