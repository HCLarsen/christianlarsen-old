import React, { Component } from 'react';
import Home from './Home';
import Freelance from './Freelance';
import OpenSource from './OpenSource';
import Projects from './Projects';
import Blog from './Blog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: "Home",
      pages: {"Home":<Home />, "Freelance":<Freelance />, "Open Source":<OpenSource />, "Side Projects":<Projects />, "Blog":<Blog /> }
    };
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Chris Larsen</h1>
          <nav>
            <ul className="navbar navbar-left">
              <li><a>Home</a></li>
              <li><a>Freelance Work</a></li>
              <li><a>Open Source Work</a></li>
              <li><a>Side Projects</a></li>
              <li><a>Blog</a></li>
            </ul>
            <ul className="navbar navbar-right">
              <li><a>Sign In</a></li>
            </ul>
          </nav>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
