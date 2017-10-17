import React, { Component } from 'react'
import BlogContent from './BlogContent'
import BlogIndex from './BlogIndex'

class Blog extends Component {
  state = {
    blogID: 1
  }
  render() {
    return(
      <section className="content">
        <BlogContent id={this.state.blogID} />
        <BlogIndex />
      </section>
    );
  }
}

export default Blog;
