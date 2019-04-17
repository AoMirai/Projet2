import React, { Component } from "react";

class FormContact extends Component {
    constructor(props){
        super(props);
        this.state = { value : props.value};
    }
    handlerChange(event) {
        this.setState({value : event.target.value});
    }
    handlerFocus(event){
        this.setState({value : ""});
    }
    handlerKeyPress(event){
        if (event.shiftkey && event.charcode === 13) {
            var value = event.target.value;
            this.props.onValid(value);
        }
    }
    render(){
        return(

        <textarea cols={this.props.cols}
        rows={this.props.rows}
        value={this.state.value}
        onChange={this.handlerChange.bind(this)}
        onFocus={this.handlerFocus.bind(this)}
        onKeysPress={this.handlerKeyPress.bind(this)}
        autoFocus={this.props.focus} />
        )
    }


}


export default FormContact;