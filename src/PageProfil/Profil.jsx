import React, {Component} from 'react';
import Banner from './Banner';
import Description from './Description';
import Medias from './Medias.jsx'
import ContactA from './ContactArtist';

import './Profil.css';

class Profil extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      name: "",
      photo: "",
      planning: "",
      playlist: "",
      price: 800,
      style: ""
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://51.68.18.101:3002/diggnshare/api/recipients/${id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                ...data,
            });
        })
};

render(){
  return (
    <div className="Profil">
    <Banner photo={this.state.photo} name={this.state.name} style={this.state.style} className="col-12"/>
    <Description desc={this.state.description} className="col-12"/>
    <Medias playlist={this.state.playlist} name={this.state.name} price={this.state.price} className="col-12"/>
    <ContactA className="col-12"/>
    </div>
  )
}

}
export default Profil;