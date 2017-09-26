import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <section className="content">
        <h2>Hello</h2>
        <p>I'm Chris Larsen, a freelance web developer, electronics technologist, rubyist, and general technology fanatic.</p>
        <p>My main stack for web development is Ruby on Rails, with ReactJS on the front end. My IoT projects are mostly done with Ruby and C. The hardware for my IoT projects is usually Raspberry Pi, but I also work with other platforms.</p>
        <p>This site contains links to my open source contributions, projects that I've been commissioned to create, and some side projects that I've created for my own interest.</p>
        <p>If you wish to contact me, please do so through my <a href="https://www.linkedin.com/in/chris-larsen-58347214/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.</p>
      </section>
    );
  }
}

export default Home;
