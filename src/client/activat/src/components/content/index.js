import ActivitiesType from '../activitiesType';
import React, { Component } from 'react';

class ActiveStep extends Component{


  render(){
      const choice = (selected)=>{
        console.log("-----------------------------");
         switch (selected) {
            case 'activities':
              return <div > FUCK</div>
            default:
              return ActivitiesType
          }
      }
    return(
      <div>{choice(this.props.step)}</div>
    )
  }
}

export default ActiveStep
