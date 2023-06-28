import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl, publishedAt, author, source} = this.props;
    return (
      <div>
        <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="news"/>
            <div className="card-body">
              <h6><span className="badge rounded-pill bg-dark">{source}</span></h6>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}...</p>
              <p className="card-text">By {author?author:"Unknown"}</p>
              <p className="card-text"><small className="text-body-secondary">Last Updated: {new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
