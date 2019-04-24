import React, { Component } from "react";
import './FormContact.css'

class FormContact extends Component {
    state ={
        Name: "",
        Surname:"",
        Email: "",
        Commentaire:""
    }

handleChange = event => {
    this.setState({Name: event.target.value , Surname : event.target.value, Mail : event.target.value, Commentaire: event.target.value })
}

onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
   }

   submitForm(e) {
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
       };
       const url = "http://51.68.18.101:3002/diggnshare/api/recipients";
    
       fetch(url, config)
    .then(res => res.json())
     .then(res => {
       
     });
    e.preventDefault();
   }


    render() {
        return(
            <form onSubmit={this.submitForm}>
            <div className="Form">
            
            Name: {this.state.name}
            <input name = "name" type="texte"  />
            <br/>
            Surname: {this.state.Surname}
            <input surname = "Surname" type="texte"  />
            <br/>
            Mail: {this.state.Mail}
            <input Mail = "Mail" type="texte"  />
            <br/>
            Comment: {this.state.Commentaire}
            <textarea col={40} rows={10}  />

            <div classename="form2"/>
          <input type="button" name="bouton" value='Send !' onclick="this.value='Touché !"/>

             </div>
             </form>
             
            
        )
    }
}


export default FormContact;