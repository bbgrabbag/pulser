import React, { Component } from 'react';
import BarListContainer from "./bar-list/bar-list-container";

import "./index.css";

class Pulser extends Component {
    render() {
        return (
            <BarListContainer toggled={this.props.toggled} />
        );
    }
}

export default Pulser;