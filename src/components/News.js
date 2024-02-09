import React, { Component } from 'react'
import './CSS/News.css'
export class News extends Component {
  render() {
    let {title,description,imgurl,newsurl} =this.props;
    return (
      <div>
        <div className="card" style={{width:'22rem'}}>
          <img src={!imgurl?'https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg':imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 classNmae="card-title">{title}</h5>
            <p className="card-text">{!description?'Insufficient details available for this news. Please refer to the complete article for a comprehensive understanding.':description}</p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-success">Read More..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default News