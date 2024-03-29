import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import Marquee from './components/Marquee';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Marquee/>
          
          <Routes>
          <Route exact path="/" element={<NewsContainer key="general"pagesize='9' country='in' category='general' imageicon='../general-logo.png'/>}></Route>
          <Route exact path="/general" element={<NewsContainer key="general"pagesize='9' country='in' category='general' imageicon='../general-logo.png'/>}></Route>
          <Route exact path="/business" element={<NewsContainer key="business"pagesize='9' country='in' category='business' imageicon='../business-logo.png'/>}></Route>
          <Route exact path="/sports" element={<NewsContainer key="sports"pagesize='9' country='in' category='sports' imageicon='../sport-icon.png'/>}></Route>
          <Route exact path="/entertainment" element={<NewsContainer key="entertainment"pagesize='9' country='in' category='entertainment' imageicon='../entertainment-logo.png'/>}></Route>
          <Route exact path="/science" element={<NewsContainer key="science"pagesize='9' country='in' category='science' imageicon='../science-logo.png'/>}></Route>
          <Route exact path="/technology" element={<NewsContainer key="technology"pagesize='9' country='in' category='technology' imageicon='../technology-icon.png'/>}></Route>
          <Route exact path="/health" element={<NewsContainer key="health"pagesize='9' country='in' category='health' imageicon='../health-icon.png'/>}></Route>
        </Routes>
        </Router>
      </div>
      
        
      
    )
  }
}
