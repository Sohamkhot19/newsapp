import React, { Component } from 'react';
import './CSS/Marquee.css';

export class Marquee extends Component {
  constructor() {
    super();
    this.state = {
      titles: [],
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=a41c1cb39f7e47ad9f737e134ef2178e&page=1&pagesize=2';
    let data = await fetch(url);
    let parseddata = await data.json();
    const titles = parseddata.articles.slice(0, 3).map((article) => article.title);
    this.setState({
      titles: titles,
    });
    console.log(titles)
  }

  render() {
    return (
      <div className="marquee-container">
        <span>Top Headlines : &nbsp;</span>
        <div className="marquee-content">
          
          <p>{this.state.titles[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.titles[1]}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.titles[2]}</p>
        </div>
      </div>
    );
  }
}

export default Marquee;
