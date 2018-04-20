import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './home.css'

class Home extends Component{



render(){
  return(
    <div>
      <nav>
        <div id="exCollapsingNavbar2">
          <ul className="nav main-nav">
            <img className='logo' height="40" width="60" />
            <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>{' '}
            </li>
            <li className="nav-item">
              <Link to={{pathname: '/about'}}>About</Link>{' '}
            </li>
            <li className="nav-item">
              <Link to="/application">Application</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div id="stage">
        <div id="stage-caption">
          <h1 className="display-3">Join to Us </h1>
          <p>To achive your dream</p>
          <a href="" className="btn btn-lg btn-success">Start Jernay</a>
        </div>
      </div>
</div>


)
  }
}

export default Home
