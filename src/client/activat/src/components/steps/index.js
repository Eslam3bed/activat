import React, { Component } from 'react';
import { Steps, Popover } from 'antd';
import { connect } from 'react-redux';

import './steps.css'
const Step = Steps.Step;



class NSteps extends Component{

  render(){

    const customDot = (dot, { status, index }) => (
      <Popover content={<span>You Are in the {index} stage</span>}>
        {dot}
      </Popover>);

    return(
      <div className="_steps">
        <Steps current={this.props.stage} progressDot={customDot}>
          <Step title="Type of activites" />
          <Step title="Sub activities" />
          <Step title="Tour information"/>
          <Step title="Food" />
          <Step title="Pick An Activity" />
          <Step title="Tour Guide"/>
          <Step title="Budget" />
          <Step title="Submit" />
        </Steps>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  stage: state.categories.stage
})

export default connect(mapStateToProps)(NSteps);
