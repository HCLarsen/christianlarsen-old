import React, { Component } from 'react'

var data = [
            {"id":1,"title":"My first blog post","date":"2016-03-30T03:30:29.734-04:00"},
            {"id":2,"title":"Ruby is Fast Enough","date":"2016-05-29T18:07:48.350-04:00"},
            {"id":3,"title":"The Power of Ruby","date":"2016-07-22T01:47:58.338-04:00"},
            {"id":4,"title":"Thoughts on Python","date":"2016-08-02T15:24:27.264-04:00"},
            {"id":5,"title":"Check Your Dependencies...Really","date":"2016-08-11T13:06:42.460-04:00"},
            {"id":6,"title":"Closed Source is not a Villainous Activity","date":"2016-09-13T15:35:24.399-04:00"},
            {"id":7,"title":"A Swift Journey and Tutorials","date":"2016-12-20T13:15:23.944-05:00"},
            {"id":8,"title":"A Good Website is Never Complete","date":"2017-01-11T22:44:37.510-05:00"},
            {"id":9,"title":"Transhumanism, and why it must be stopped","date":"2017-01-24T23:14:32.481-05:00"},
            {"id":10,"title":"Why I Love React (Even Though I Hate JavaScript)","date":"2017-05-01T22:43:10.102-04:00"},
            {"id":11,"title":"For the Love of Programming","date":"2017-05-18T13:07:18.701-04:00"},
            {"id":12,"title":"What Do You Know, Apple was Right","date":"2017-06-28T13:44:23.684-04:00"},
            {"id":13,"title":"Adventures in Gem Creation","date":"2017-07-17T16:17:37.128-04:00"}
          ]

class BlogIndex extends Component {
  render() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var index = {}
    data = data.reverse()
    data.forEach(function(item, i, array) {
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
    //console.log(index)

    var list = []
    for (var year in index) {
      var month_list = []
      for (var month in index[year]) {
        var post_list = []
        index[year][month].forEach(function(post, i, array) {
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
