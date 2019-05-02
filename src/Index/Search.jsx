import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <FontAwesomeIcon icon={faSearch} className="fa"/>
        <input
          placeholder="Recherche artiste ou style"
          name="text"
          type="text"
          value={this.props.text}
          onChange={this.props.change}
          className="searchBox"
        />
      </div>
    );
  }
}

export default Search;
