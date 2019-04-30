import React, { Component } from 'react';
import './ContactArtist.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FormGroup, Label, Input, } from 'reactstrap';

class ContactA extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false ,
      show: true,
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
    this.setState(state => ({ show: !state.show }));
  }

  render() {
    return (
      <div className="ContactArtist">
          
        <Button className="button-contact" style={{display: this.state.show ? 'block' : 'none' }} onClick={this.toggle} >Contactez-le(s)</Button>
        <Collapse isOpen={this.state.collapse}>
        
          <Card>
              <div class="contactez">
              <h3>Contactez les !</h3>
              </div>
            <CardBody>
                <div className="text">
                <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Votre message"/>
                </FormGroup>
            
            </div>

             
            </CardBody>
            <div >
        <Button className="button-send" size="lg">Envoyer</Button>{' '}
        </div>
          </Card>
        </Collapse>
        
      </div>

      
      
      
    );
  }
}

export default ContactA;
