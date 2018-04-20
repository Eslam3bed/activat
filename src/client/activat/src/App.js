import React, { Component } from 'react';
import logo from './logo.svg';
import NSteps from './components/steps/'
import  ActiveStep  from './components/content/'
import Category from './components/activitiesType/'


import 'antd/dist/antd.css';
class App extends Component {
  render() {

    return (
      <div>
        <NSteps/>
        <Category/>
      </div>
    );
  }
}

export default App;
