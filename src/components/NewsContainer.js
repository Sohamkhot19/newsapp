import React, { Component } from "react";
import News from "./News";
import Spinner from "./spinner";
import PropTypes from "prop-types";
export class NewsContainer extends Component {
  static defaultProps = {
    pagesize: 9,
    country: "in",
    category: "general",
    imageicon: "../general-logo.png",
  };
  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a41c1cb39f7e47ad9f737e134ef2178e&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }
  nextpage = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apikey=a41c1cb39f7e47ad9f737e134ef2178e&page=${
        this.state.page + 1
      }&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false,
      });
    }
  };

  prevpage = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=a41c1cb39f7e47ad9f737e134ef2178e&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-4">
          <img
            src={this.props.imageicon}
            alt="img"
            height={"55px"}
            width={"55px"}
            style={{ padding: "5px" }}
          ></img>
          Newziee - Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-5">
                  <News
                    key={element.url}
                    title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-success"
            onClick={this.prevpage}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            id="nextbtn"
            type="button"
            class="btn btn-success"
            onClick={this.nextpage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsContainer;
