import React, { Component } from 'react';
import ContactInfo from './ContactInfo'
import Home from './Home';
import Freelance from './Freelance';
import OpenSource from './OpenSource';
import Projects from './Projects';
import Client from './Client'
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import menu from './menu-icon.png';

const CONTRIBUTIONS_LIMIT = 2 // maximum number of open source contributions displayed.
const ORIGINAL_LIMIT = 5 // maximum number of personal projects displayed.

class App extends Component {
  state = {
    dropDown: false,
    projects: [],
    contributions: []
  }
  componentWillMount() {
    Client.search(repos => {
      var projects = repos.filter(function(repo) {
        return !repo.fork && repo.stargazers_count > 0
      }).slice(0, ORIGINAL_LIMIT)
      var contributions = repos.filter(function(repo) {
        return repo.fork  && repo.stargazers_count > 0
      }).slice(0, CONTRIBUTIONS_LIMIT)
      this.setState({
        projects: projects,
        contributions: contributions
      })
    })
  }
  closeMenu = () => {
    if (this.state.dropDown) {
      this.setState({dropDown: false})      
    }
  }
  menuToggle = () => {
    this.setState({dropDown:!this.state.dropDown})
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title-bar">
            <h1 className="title">Chris Larsen</h1>
            <ContactInfo />
          </div>
          <nav className={this.state.dropDown ? "show-nav" : ""} onClick={this.closeMenu}>
            <button className="menu-button" onClick={this.menuToggle}>
              <img className="menu" alt="" src={menu}/>
            </button>
            <ul className={this.state.dropDown ? "navbar show-nav" : "navbar"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/freelance">Freelance Work</Link></li>
              <li><Link to="/openSource">Open Source</Link></li>
              <li><Link to="/projects">Side Projects</Link></li>
            </ul>
          </nav>
        </div>
        <div className="content-container">
          <Switch >
            <Route exact path="/" onLeave={this.routeChange} component={Home} />
            <Route path="/freelance" component={Freelance} />
            <Route path="/opensource" render={(props) => (
              <OpenSource projects={this.state.contributions} {...props} />
            )} />
            <Route path="/projects" render={(props) => (
              <Projects projects={this.state.projects} {...props} />
            )} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
