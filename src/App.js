import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import Marquee from './components/Marquee';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

export default class App extends Component {
 
  render() {
    return (
      <>
        <Navbar/>
        <Marquee/>
        <NewsContainer pagesize='9'/>
      </>
      
        
      
    )
  }
}
