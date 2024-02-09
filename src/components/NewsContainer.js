import React, { Component } from 'react'
import News from './News'

export class NewsContainer extends Component {
  constructor(){
    super();
    console.log("hello world");
    this.state={
      articles:[],
      page:1,

    }
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=a41c1cb39f7e47ad9f737e134ef2178e&page=1&pagesize=21';
    let data=await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({
      articles:parseddata.articles,
      totalResults:parseddata.totalResults,
    })
  }
  nextpage=async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/21)){
      
    }
    else{
      console.log('next');
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a41c1cb39f7e47ad9f737e134ef2178e&page=${this.state.page+1}&pagesize=21';
      let data=await fetch(url);`;
      let data=await fetch(url);
      let parseddata=await data.json();
      console.log(parseddata);
      this.setState({
        page:this.state.page+1,
        articles:parseddata.articles})
      }
    
  }
  prevpage=async()=>{
    console.log('prev');
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a41c1cb39f7e47ad9f737e134ef2178e&page=${this.state.page-1}&pagesize=21`;
    let data=await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Newziee - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-5">
              <News key={element.url} title={element.title} 
              description={element.description}
              imgurl={element.urlToImage}
              newsurl={element.url}/>           
            </div>
          })}
          
          
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}  type="button" class="btn btn-success" onClick={this.prevpage}>&larr; Previous</button>
            <button id='nextbtn' type="button" class="btn btn-success" onClick={this.nextpage}>Next &rarr;</button>
        </div>
        
       
      </div>
      
    )
  }
}

export default NewsContainer