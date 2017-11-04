import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <ul className="contact-info">
          <li><a href="https://www.linkedin.com/in/chris-larsen-58347214/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/HCLarsen" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
        <ul className="contact-info">
          <li><a href="https://www.hackerrank.com/HCLarsen" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
          <li><a href="https://codefights.com/profile/hclarsen" target="_blank" rel="noopener noreferrer">CodeFights</a></li>
          <li><a href="https://www.codingame.com/profile/ef9dbf586fe48edbd0ca1e569084a33f2941112" target="_blank" rel="noopener noreferrer">CodinGame</a></li>
        </ul>
      </div>
    )
  }
}

export default ContactInfo
