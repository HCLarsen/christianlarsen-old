import React, { Component } from 'react'
import Client from "./Client"

class BlogIndex extends Component {
  state = {
    posts: []
  }
  fetchIndex() {
    console.log("Fetching")
    Client.search(posts => {
      this.setState({ posts: posts });
      console.log(this.state.posts)
    });
  }
  componentWillMount() {
    this.fetchIndex()
  }
  render() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var index = {}
    var data = this.state.posts.reverse()
    data.forEach(function(item) {
      var date = new Date(item.date)
      var year = date.getFullYear()
      var month = date.getMonth()
      if (index[year] == null) {
        index[year] = {}
      }
      if (index[year][months[month]] == null) {
        index[year][months[month]] = []
      }
      index[year][months[month]].push(item)
    })

    var list = []
    for (var year in index) {
      var month_list = []
      for (var month in index[year]) {
        var post_list = []
        index[year][month].forEach(function(post) {
          post_list.push(<li key={post.id}>{post.title}</li>)
        })
        month_list.push(<li key={month}>{month}<ul className="post-list">{post_list}</ul></li>)
      }
      list.push(<li key={year}>{year}<ul className="month-list">{month_list}</ul></li>)
    }
    list = list.reverse()
    return(
      <aside className="blog-sidebar">
        <h2>Archives</h2>
        <ul className="year-list">
          {list}
        </ul>
      </aside>
    );
  }
}

export default BlogIndex;
