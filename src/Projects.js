import React, { Component } from 'react';
import Project from './Project';
import text from './Projects.json'

class Projects extends Component {
  render() {
    var projects = text.map(function(p, i) {
      return <Project key={i} name={p.name} url={p.url} description={p.description} />
    });
    return(
      <section className="content">
        <p>These is a list of software that I have created on my own.</p>
        <dl>
          {projects}
        </dl>
      </section>
    );
  }
}

export default Projects;
