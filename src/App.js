import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      counter:0,
        lista: ['a','b','c']
    }
  }

  klikam = () => { this.setState({counter:this.state.counter+1}) }
// this wskazuje na komponent App, bo mam funkcję strzałkową; gdyby to był ES5, to this wskazywałoby na button; this wskazuje na komponent, w którym jest zdefiniowany

    render() {
    console.log(this.props);

    // const name="Magda";  //tworzę tu zmienną, którą potem drukuję w <p>

    return (  // dzięki transpilatorwi Babel zamienia się to na jsx (to nie jest html)
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/*// Hi {name}*/}
          Hi {this.props.name}, {this.state.counter}
        </p>
          <button onClick={this.klikam}>Licznik</button>
      </div>
    );
  }
}

export default App;

// kod js w nawiasach wąsatych tu dajemy (to moze być zmienna, funkcja itp)
// klasa w Reacie dostaje zawsze obiekt props
