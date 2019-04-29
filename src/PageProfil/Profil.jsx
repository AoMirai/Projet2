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
      price: 120,
      style: ""
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://51.68.18.101:3002/diggnshare/api/recipients/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
            this.setState({
                ...data,
            });
        })
};

render(){
  return (
    <div className="Profil">
    <Banner photo={this.state.photo} name={this.state.name} style={this.state.style}/>
    <Description desc={this.state.description}/>
    <Medias playlist={this.state.playlist} name={this.state.name}/>
    <ContactA/>
    </div>
  )
}

}
export default Profil;