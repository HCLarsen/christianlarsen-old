import React, { Component } from 'react';
import Home from './Home';
import Freelance from './Freelance';
import OpenSource from './OpenSource';
import Projects from './Projects';
import Blog from './blog/Blog';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'

class App extends Component {
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/freelance">Freelance Work</Link></li>
              <li><Link to="/openSource">Open Source</Link></li>
              <li><Link to="/projects">Side Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
            <ul className="navbar navbar-right">
              <li><a>Sign In</a></li>
            </ul>
          </nav>
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/freelance" component={Freelance} />
            <Route path="/opensource" component={OpenSource} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
