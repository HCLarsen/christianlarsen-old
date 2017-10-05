import React, { Component } from 'react';
import Project from './Project';
import text from './freelance.json'

class Freelance extends Component {
  render() {
    var projects = text.map(function(p, i) {
      return <Project key={i} name={p.name} url={p.url} description={p.description} />
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
