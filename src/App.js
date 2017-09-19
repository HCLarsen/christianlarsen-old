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
          <div className="title-bar">
            <h1 className="title">Chris Larsen</h1>
            <div className="contact-info">
              <ul className="contact-info">
                <li><a href="https://www.linkedin.com/in/chris-larsen-58347214/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/HCLarsen">Github</a></li>
              </ul>
              <ul className="contact-info">
                <li><a href="https://www.hackerrank.com/HCLarsen" target="_blank">HackerRank</a></li>
                <li><a href="https://codefights.com/profile/hclarsen" target="_blank">CodeFights</a></li>
                <li><a href="https://www.codingame.com/profile/ef9dbf586fe48edbd0ca1e569084a33f2941112" target="_blank">CodinGame</a></li>
              </ul>
            </div>
          </div>
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
