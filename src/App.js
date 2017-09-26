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
      pages: {"Home":<Home />, "Freelance Work":<Freelance />, "Open Source":<OpenSource />, "Side Projects":<Projects />, "Blog":<Blog /> },
      activeView: <Home />
    };
  }
  handleChangeView(e) {
    e.preventDefault();
    this.setState({ activeView: this.state.pages[e.target.text] });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title-bar">
            <h1 className="title">Chris Larsen</h1>
            <div className="contact-info">
              <ul className="contact-info">
                <li><a href="https://www.linkedin.com/in/chris-larsen-58347214/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/HCLarsen" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
              <ul className="contact-info">
                <li><a href="https://www.hackerrank.com/HCLarsen" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
                <li><a href="https://codefights.com/profile/hclarsen" target="_blank" rel="noopener noreferrer">CodeFights</a></li>
                <li><a href="https://www.codingame.com/profile/ef9dbf586fe48edbd0ca1e569084a33f2941112" target="_blank" rel="noopener noreferrer">CodinGame</a></li>
              </ul>
            </div>
          </div>
          <nav>
            <ul className="navbar navbar-left">
              <li><a href="home" onClick={ this.handleChangeView.bind(this) }>Home</a></li>
              <li><a href="freelance" onClick={ this.handleChangeView.bind(this) }>Freelance Work</a></li>
              <li><a href="openSource" onClick={ this.handleChangeView.bind(this) }>Open Source</a></li>
              <li><a href="projects" onClick={ this.handleChangeView.bind(this) }>Side Projects</a></li>
              <li><a href="blog" onClick={ this.handleChangeView.bind(this) }>Blog</a></li>
            </ul>
            <ul className="navbar navbar-right">
              <li><a>Sign In</a></li>
            </ul>
          </nav>
        </div>
        <div className="content-container">
          {this.state.activeView}
        </div>
      </div>
    );
  }
}

export default App;
