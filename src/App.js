import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloStateless from './components/hello-stateless'
import HelloStateful from './components/hello-stateful'
import Counter from './components/counter'

// Wykomentowałam, bo przerzuciłam komponentu do oddzielnego katalogu
// Tworzę obiekt, który ma być zwykła zmienną / funkcją
// const HelloStateless = ({ name }) => <div>Hello {name}</div>;
    // parametr stateless to po prostu propsy
// zamiast całych propsów powyżej wyciągam tylko {name} (przed strzałką)
// potem wyrzuciłam tą const do odzielnego pliku

// Tworzę obiekt, który ma być klasą
// class HelloStateful extends Component {
//     render() {
//         const { name } = this.props;
//         return <div>Hello {this.props.name}</div>
//     }
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HelloStateless name="Magda"/>
          <HelloStateful name="Seba"/>
          <Counter/>
      </div>
    );
  }
}

export default App;

// kod js w nawiasach wąsatych tu dajemy (to moze być zmienna, funkcja itp)
// klasa w Reacie dostaje zawsze obiekt props
// w funkcjcach strzałkowych nie trzeba używać return
