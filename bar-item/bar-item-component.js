import React, { Component } from 'react';

class BarItemComponent extends Component {
    componentWillMount() {
        this.props.animate(this.props.barData.rate, this.props.index)
    }
    render() {
        return (
            <div className="bar" style={{
                height: this.props.barData.height + "%"
            }}></div>
        );
    }
}

export default BarItemComponent;