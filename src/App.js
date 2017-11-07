import React, { Component } from 'react';
import ContactInfo from './ContactInfo'
import Home from './Home';
import Freelance from './Freelance';
import OpenSource from './OpenSource';
import Projects from './Projects';
import Client from './Client'
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'

const CONTRIBUTIONS_LIMIT = 2 // maximum number of open source contributions displayed.
const ORIGINAL_LIMIT = 5 // maximum number of personal projects displayed.

class App extends Component {
  state = {
    projects: [],
    contributions: []
  }
  componentWillMount() {
    console.log("Mounting")
    Client.search(repos => {
      var projects = repos.filter(function(repo) {
        return !repo.fork && repo.stargazers_count > 0
      }).slice(0, ORIGINAL_LIMIT)
      var contributions = repos.filter(function(repo) {
        console.log(repo)
        return repo.fork  && repo.stargazers_count > 0
      }).slice(0, CONTRIBUTIONS_LIMIT)
      this.setState({
        projects: projects,
        contributions: contributions
      })
    })
  }
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
            </ul>
          </nav>
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />
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
