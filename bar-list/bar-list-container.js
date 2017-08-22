import React, { Component } from 'react';
import BarListComponent from "./bar-list.component";

class BarListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.animate = this.animate.bind(this);
        this.intervals = {};
    }
    componentWillMount() {
        this.setState(
            this.setInitialData()
        )
    }
    setInitialData() {
        let bars = [];
        let initialHeights = []
        for (let i = 0; i < 5; i++) {
            let bar = {
                height: Math.floor((Math.random() * 56) + 18),
                rate: Math.floor((Math.random() * 18) + 5)
            }
            if (bar.height === 100) {
                bar.directionUp = false;
            } else {
                bar.directionUp = true;
            }
            bars.push(bar);
            initialHeights.push(bar.height);
        }
        return {
            bars: bars,
            initialHeights: initialHeights
        };
    }
    animate(rate, index) {
        this.intervals[index] = setInterval(() => this.adjustHeight(index), rate);
    }
    adjustHeight(index) {
        if (!this.props.toggled) return;
        if (this.state.bars[index].directionUp) {
            this.addHeight(index);
        } else {
            this.subtractHeight(index);
        }
    }
    addHeight(index) {
        this.setState((prevState) => {
            let newBars = [...prevState.bars];
            let bar = newBars[index];
            bar.height++;
            if ((bar.height + 1) === 100) {
                bar.directionUp = !bar.directionUp;
            }
            return {
                ...prevState,
                bars: newBars
            }
        })
    }
    subtractHeight(index) {
        this.setState((prevState) => {
            let newBars = [...prevState.bars];
            let bar = newBars[index];
            let initialHeight = this.state.initialHeights[index];
            bar.height--;
            if (bar.height === initialHeight) {
                bar.directionUp = !bar.directionUp;
            }
            return {
                ...prevState,
                bars: newBars
            }
        })
    }
    render() {
        return (
            <BarListComponent
                bars={this.state.bars}
                animate={this.animate}
            />
        );
    }
}

export default BarListContainer;