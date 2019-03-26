import React, { Component } from 'react';
import logo from './photo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            something awesome will go here
          </a>
        </header>
      </div>
    );
  }
}

export default App;
