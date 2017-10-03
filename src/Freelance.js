import React, { Component } from 'react';
import Project from './Project';

class Freelance extends Component {
  constructor() {
    super();
    this.state = {
      projects: [{ name: "Electric Star Productions", url: "https://www.electricstarproductions.ca/", description: "Electric Star Productions is a DJ and Events company in Toronto. They wanted a website with editable information about their DJs. I used ReactJS on the front end, to provide smooth transition between the standard view and the forms that enable editing. The back end uses Ruby on Rails to store the content in a PostgreSQL Database."}]
    }
  }
  render() {
    var projects = this.state.projects.map(function(p) {
      return <Project name={p.name} url={p.url} description={p.description} />
    });
    return(
      <section className="content">
        <h2>Freelance Work</h2>
        <p>Below is the paid work I've done as a freeelance web developer.</p>
        <dl>
          {projects}
        </dl>
      </section>
    );
  }
}

export default Freelance;
