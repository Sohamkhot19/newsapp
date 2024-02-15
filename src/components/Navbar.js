import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './CSS/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: ''
    };
  }

  startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let s = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    this.setState({ currentTime: `${h}:${m}:${s}` });
  };

  componentDidMount() {
    this.intervalId = setInterval(this.startTime, 0);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`} style={{ color: 'green' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{fontSize:'26px',fontWeight:'600'}}>Newziee</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/General" style={{fontSize:'16px',fontWeight:'700'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" style={{fontSize:'16px',fontWeight:'700'}}>About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'16px',fontWeight:'700'}}>
            NewsType
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/general">General</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/science">science</Link></li>
            <li><Link className="dropdown-item" to="/health">health</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
          </ul>
        </li>
              </ul>
              <span id='txt' style={{ marginLeft: '10px',color:'darkgreen'}}><strong>{new Date().toDateString()}</strong></span>
              <span id='txt' style={{ marginLeft: '10px',color:'darkgreen'}}><strong>   {this.state.currentTime}</strong></span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

