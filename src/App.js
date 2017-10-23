import React, { Component } from 'react';
import ContactInfo from './ContactInfo'
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
            <ContactInfo />
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
