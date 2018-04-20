import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{



render(){
  return(
    <div className="home-component">
      <div className="nav-links">
        <Link to="/">Home</Link>{' '}
        <Link to={{pathname: '/about'}}>About</Link>{' '}
        <Link to="/application">Application</Link>
      </div>
    </div>
)
  }
}

export default Home
