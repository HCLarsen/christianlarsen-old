import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import BlogIndex from './BlogIndex'

var input = '# This is a header\n\nAnd this is a paragraph';

class Blog extends Component {
  render() {
    return(
      <section className="content">
        <article className="blog-content">
          <Markdown source={input} />
        </article>
        <BlogIndex />
      </section>
    );
  }
}

export default Blog;
