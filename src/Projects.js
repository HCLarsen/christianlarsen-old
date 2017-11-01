import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  render() {
    var projects = this.props.projects.map(function(p, i) {
      return <Project key={i} name={p.name} url={p.html_url} description={p.description} target="_blank" rel="noopener noreferrer" />
    });
    return(
      <section className="content">
        <p>This is a list of software that I've created on my own.</p>
        <dl>
          {projects}
        </dl>
      </section>
    );
  }
}

export default Projects;
