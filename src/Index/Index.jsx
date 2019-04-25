import React, { Component } from "react";
import Artists from "./Artists";
import Search from "./Search";

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            artists: [],
        };
    }

    componentDidMount() {
        fetch("http://51.68.18.101:3002/diggnshare/api/recipients")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    artists: data,
                });
            })
    };

    onChangeSearch = (event) => {
        const value = event.target.value;
        this.setState({
            text: value,
        });
    }


    render() {
        const filteredArtists = this.state.artists.filter(artist => artist.name.toLowerCase().includes(this.state.text.toLocaleLowerCase())|| artist.style.toLowerCase().includes(this.state.text.toLocaleLowerCase()))
        return (
            <div className="Index">
                <Search text={this.state.text} change={this.onChangeSearch} />
                <Artists artists={filteredArtists} />
            </div>
        )
    }
}

export default Index;