// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './CSS/Navbar.css'
export class Navbar extends Component {
//   static propTypes = {}

  render() {
    let mode=this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`} style={{color:'green'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Newziee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NewsType
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">politics</a></li>
            <li><a className="dropdown-item" href="/">Sports</a></li>
            <li><a className="dropdown-item" href="/">Weathers</a></li>
            <li><a className="dropdown-item" href="/">Entertainment</a></li>
            <li><a className="dropdown-item" href="/">education</a></li>
          </ul>
        </li>
        
      </ul>
      <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar