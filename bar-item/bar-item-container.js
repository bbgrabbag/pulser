import React, { Component } from 'react';
import BarItemComponent from "./bar-item-component";

class BarItemContainer extends Component {
    render() {
        return (
            <BarItemComponent
                barData={this.props.barData}
                animate={this.props.animate}
                index={this.props.index}
            />
        );
    }
}

export default BarItemContainer;