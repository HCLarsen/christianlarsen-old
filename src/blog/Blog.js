import React, { Component } from 'react'
import BlogContent from './BlogContent'
import BlogIndex from './BlogIndex'

class Blog extends Component {
  state = {
    blogID: 1
  }
  handleChangeBlog(id) {
    this.setState( { blogID: id })
  }
  render() {
    console.log("Blog Rendering")
    return(
      <section className="content">
        <BlogContent id={this.state.blogID} />
        <BlogIndex handleChangeBlog={this.handleChangeBlog.bind(this)} />
      </section>
    );
  }
}

export default Blog;
