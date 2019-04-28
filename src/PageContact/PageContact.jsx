import React, { Component } from 'react';
import FormContact from './FormContact';
import Titre from './Titre';
import './FormContact.css'
import './PageContact.css'


class PageContact extends Component {
    render() {
        return(
            <div className="PageContact">
            <Titre className="col-12"/>
            <FormContact className="col-12"/>
            
            </div>
        )
    }
}

export default PageContact;