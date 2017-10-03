import React, { Component } from 'react';
import Project from './Project';

class OpenSource extends Component {
  constructor() {
    super();
    this.state = {
      projects: [{ name: "Invoice Printer", url: "https://github.com/strzibny/invoice_printer", description: "Super simple PDF invoicing in Ruby. I provided advice on international tax terms, and updated the names for appropriate variables."},
                 { name: "Plist", url: "https://github.com/patsplat/plist", description: "All-purpose Property List manipulation library. My contribution was an update to a deprecated method call."}]
    }
  }
  render() {
    var projects = this.state.projects.map(function(p) {
      return <Project name={p.name} url={p.url} description={p.description} />
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
