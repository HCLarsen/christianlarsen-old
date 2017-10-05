import React, { Component } from 'react';
import Project from './Project';
import text from './OpenSource.json'

class OpenSource extends Component {
  render() {
    var projects = text.map(function(p, i) {
      return <Project key={i} name={p.name} url={p.url} description={p.description} />
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
