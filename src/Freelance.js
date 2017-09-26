import React, { Component } from 'react';
import Project from './Project';

class Freelance extends Component {
  render() {
    return(
      <section className="content">
        <h2>Freelance Work</h2>
        <p>Below is the paid work I've done as a freeelance web developer.</p>
        <Project name="Test" description="Testing" />
      </section>
    );
  }
}

export default Freelance;
