import React, { Component } from 'react';
// import logo from './logo.svg';
import NSteps from './components/steps/'
// import  ActiveStep  from './components/content/'
import Category from './components/activitiesType/'
import Home from './components/home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import 'antd/dist/antd.css';
class App extends Component {
  render() {

    return (
      <div>
      <Router>
            <Switch>
              <Route path="/application" render={()=>
                <div>
                <NSteps/>
                <Category/>
                </div>
              } />
              <Route path="/" component={Home} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
        </div>
    );
  }
}


export default App;
