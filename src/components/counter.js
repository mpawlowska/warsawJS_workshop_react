import React, { Component } from 'react'

class Counter extends Component {

    // definiuję initial state - 1. sposób - wykomentowany
    // state = {
    //     count: 10
    // }

    // definiuję initial state - 2. sposób:
    constructor(props) {
        super(props);  //dziedziczę konstruktory z rodzica - jak uzywam extenda to super jest obowiązkowe
        this.state = {
            count: 10
        }
    }

    handleDecrementCount = () => {
        this.setState({ count: this.state.count-1 });    // funkcja strzałkowa powoduje, że this idzie o jeden poziom w górę więc this dotyczy App
    };

    handleIncrementCount = () => {
        this.setState({ count: this.state.count+1 });
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleDecrementCount}>Decrement</button>
                <button onClick={this.handleIncrementCount}>Increment</button>
            </div>
        )
    }
}

export default Counter;

// jedna funkcja render() może zwracać tylko jeden element, nie można dodać np dwóch <div> - wszystko zamykamy w jednym div
// sposoby definiowania initial state - dwa