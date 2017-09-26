import React, { Component } from 'react';

class Project extends Component {
  render() {
    return(
      <div className="content">
        <dt>{this.props.name}</dt>
        <dd>{this.props.description}</dd>
      </div>
    );
  }
}

export default Project;
