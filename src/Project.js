import React, { Component } from 'react';

class Project extends Component {
  render() {
    return(
      <div className="project">
        <dt className="project-name"><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.name}</a></dt>
        <dd className="project-description">{this.props.description}</dd>
      </div>
    );
  }
}

export default Project;
