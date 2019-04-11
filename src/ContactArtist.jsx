import React, { Component } from 'react';
import './ContactArtist.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FormGroup, Label, Input, } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
          
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '5rem' }}>Contact Artist</Button>
        <Collapse isOpen={this.state.collapse}>
        
          <Card>
              <div class="contactez">
              <h1>Contactez les !!!</h1>
              </div>
            <CardBody>
                <div id="text">
                <FormGroup>
                    <Label for="exampleText">Votre Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
            
            </div>

             
            </CardBody>
            <div buttonsend>
        <Button color="primary" size="lg">Send</Button>{' '}
        </div>
          </Card>
        </Collapse>
        <hr></hr>
      </div>

      
      
      
    );
  }
}

export default Example;








