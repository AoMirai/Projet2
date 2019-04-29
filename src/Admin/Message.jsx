import React, {Component} from 'react';
import  {Collapse} from 'reactstrap';

class Message extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false,
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  nowIsConfirmed = () => {
    const id = this.props.message.id
    this.props.isConfirmed(id)

  }
  
  render() {
    return (

      <div className="Message" >
        <Collapse className="resume-button" onClick={this.toggle} isOpen={!this.state.collapse}>
        <ul> 
                <li>Nom : {this.props.message.lastname}</li> 
             <li>Prénom : {this.props.message.firstname}</li> 
             <li>Email : {this.props.message.email}</li> 
                </ul>
        </Collapse>
        <Collapse isOpen={this.state.collapse}>
          <div className="contenu-message">
            
            <h5 onClick={this.toggle}>{`${this.props.message.firstname} ${this.props.message.lastname}`}</h5>
            <p>{this.props.message.message}</p>
            <div className="buttons">
              <button className="suppr" onClick={this.nowIsConfirmed} >Supprimer</button>
            </div>
          </div>

        </Collapse>
      </div>

    )
  };
}

export default Message