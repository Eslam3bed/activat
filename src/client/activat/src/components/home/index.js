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
          <h1 className="display-3">You have a dream adventure ? 
          well , we can make it a reality </h1>
          <p>Start customizing your tours and activities with us</p>
          <a href="/application" className="btn">Start Now !</a>
        </div>
      </div>
</div>


)
  }
}

export default Home
