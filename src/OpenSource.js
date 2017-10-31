import React, { Component } from 'react';
import Project from './Project';

class OpenSource extends Component {
  render() {
    var projects = this.props.projects.map(function(p, i) {
      return <Project key={i} name={p.name} url={p.html_url} description={p.description} target="_blank" rel="noopener noreferrer" />
    });
    return(
      <section className="content">
        <p>These are the open source libraries that I've contributed to.</p>
        <dl>
          {projects}
        </dl>
      </section>
    );
  }
}

export default OpenSource;
