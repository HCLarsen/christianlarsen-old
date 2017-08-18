import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Chris Larsen</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Freelance Work</li>
              <li>Open Source Work</li>
              <li>Side Projects</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <p className="Content">
          My personal page.
        </p>
      </div>
    );
  }
}

export default App;
