import React, { Component } from 'react';
import BarItemContainer from "../bar-item/bar-item-container";

class BarListComponent extends Component {
    genList() {
        return this.props.bars.map((barData, index) => {
            return <BarItemContainer
                toggled={this.props.toggled}
                key={index}
                barData={barData}
                animate={this.props.animate}
                stopAnimate={this.props.stopAnimate}
                index={index} />
        })
    }
    render() {
        return (
            <div className="bar-wrapper">
                <div className="bar-body">
                    {this.genList()}
                </div>
            </div>
        );
    }
}

export default BarListComponent;