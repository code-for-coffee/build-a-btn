import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dinosaur from './Dinosaur';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How to train a dinosaur</h1>
        </header>
        <section>
          <Dinosaur />
        </section>
        <p className="App-intro">
          <ul>
            <li>Feed the dinosaur</li>
            <li>Give the dinosaur meat</li>
            <li>Have carl lecture him in dino economics 101</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
