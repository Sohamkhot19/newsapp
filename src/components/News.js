import React, { Component } from 'react'
import './CSS/News.css'
export class News extends Component {
  render() {
    let {title,description,imgurl,newsurl} =this.props;
    return (
      <div>
        <div className="card" style={{width:'22rem'}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 classNmae="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target='_blank' className="btn btn-sm btn-success">Read More..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default News