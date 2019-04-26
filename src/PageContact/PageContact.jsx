import React, { Component } from 'react';
import FormContact from './FormContact';
import Titre from './Titre';
import './FormContact.css'


class PageContact extends Component {
    render() {
        return(
            <div className="PageContact">
            <Titre />
            <FormContact />
            
            </div>
        )
    }
}

export default PageContact;