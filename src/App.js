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
            <ul className="navbar navbar-left">
              <li><a href="#">Home</a></li>
              <li><a href="#">Freelance Work</a></li>
              <li><a href="#">Open Source Work</a></li>
              <li><a href="#">Side Projects</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <ul className="navbar navbar-right">
              <li><a href="#">Sign In</a></li>
            </ul>
          </nav>
        </div>
        <section>
          <p className="Content">{"I'm Chris Larsen, a freelance web developer, electronics technologist, rubyist, and general technology fanatic."}</p>
        </section>
      </div>
    );
  }
}

export default App;
