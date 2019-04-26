 import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";
import Accueil from "./Accueil/Accueil";
import Prestaform1 from "./PrestaForm1/PrestaForm";
import Prestaform2 from "./prestaform2/Prestaform2";
import Profil from './PageProfil/Profil'

import PageContact from './PageContact/PageContact';


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
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

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

  handleRemoveShareholder = (idx, ) => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { shareholders, ...artist } = this.state;
    artist.member = shareholders.map(m => m.name).join(',');
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
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/"/>
            <Route path="/newpresta/1" render={() => 
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
            } />
            <Route path="/newpresta/2" render={() => 
              <Prestaform2
                playlist={this.state.playlist}
                change={this.onChange}
                onSubmit={this.submitForm}
              />
            } />
            <Route path="/profil/1" component={Profil} />
           
            <Route path="/pageContact" component={PageContact}/>

          </Switch>
          <Footer />
        </BrowserRouter> 
      </div>
    );
  }
}


export default App;
