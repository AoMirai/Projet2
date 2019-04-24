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