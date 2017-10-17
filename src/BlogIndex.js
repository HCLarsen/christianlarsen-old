import React, { Component } from 'react'
import Client from './IndexFetch'

class BlogIndex extends Component {
  state = {
    index: {}
  }
  fetchIndex() {
    Client.search(posts => {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
      var index = {}
      var data = posts.reverse()
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
      this.setState({ index: index })
    });
  }
  componentWillMount() {
    this.fetchIndex()
  }
  render() {
    var index = this.state.index
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
        <h3>Archives</h3>
        <ul className="year-list">
          {list}
        </ul>
      </aside>
    );
  }
}

export default BlogIndex;
