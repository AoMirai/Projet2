import React, { Component } from "react";
import Artists from "./Artists";

import './Index.css';

class Index extends Component {
    render(){
        return(
            <div className="Index">
                <Artists />
            </div>
        )
    }
}

export default Index;