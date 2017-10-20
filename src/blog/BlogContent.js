import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import Client from './BlogFetch'
import './Blog.css'

class BlogContent extends Component {
  state = {
    title: "",
    date: "",
    content: ""
  }
  fetchBlog(id) {
    Client.search(id, blog => {
      var date = new Date(blog.created_at)
      this.setState({
        title: blog.title,
        date: date.toDateString(),
        content: blog.content
      })
    })
  }
  componentWillMount() {
    this.fetchBlog(this.props.id)
  }
  render() {
    console.log("Blog Content Rendering")
    console.log(this.props.id)
    return(
      <article className="blog-content">
        <h1>{this.state.title}</h1>
        <p>{this.state.date}</p>
        <Markdown source={this.state.content} />
      </article>
    );
  }
}

export default BlogContent;
