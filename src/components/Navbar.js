// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './CSS/Navbar.css'
import {Link} from "react-router-dom";
export class Navbar extends Component {
//   static propTypes = {}

  render() {
    // let mode=this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`} style={{color:'green'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Newziee</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/General">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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