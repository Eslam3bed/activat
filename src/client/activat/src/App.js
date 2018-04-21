import React, { Component } from 'react';
import { connect } from 'react-redux';
import NSteps from './components/steps/'
// import  ActiveStep  from './components/content/'
import Category from './components/activitiesType/'
import Application from './components/applicationForm'
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
                {this.props.formScreen ? <Application/>:<Category/>}
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



const mapStateToProps = state =>({
  formScreen:state.categories.formScreen,
  stage:state.categories.stage
})

export default  connect(mapStateToProps)(App);
