import React, { Component } from 'react';
import { Steps, Popover } from 'antd';
import './steps.css'
const Step = Steps.Step;



class NSteps extends Component{

  render(){

    const customDot = (dot, { status, index }) => (
      <Popover content={<span>step {index} status: {status}</span>}>
        {dot}
      </Popover>);

    return(
      <div className="_steps">
        <Steps current={2} progressDot={customDot}>
          <Step title="Pik An Activity" description="What Kind of Journy Do you like" />
          <Step title="In Progress" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
          <Step title="Waiting" description="You can hover on the dot." />
        </Steps>
      </div>
    )
  }
}

export default NSteps;
