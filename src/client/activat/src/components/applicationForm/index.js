import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigateToNextSection } from './actions'
import { MainInformations ,FoodSelections,
ActivietiesSelections,
TourGuideSelections,
BudgetSelections} from './formSections';
import {  Button , Row , Col } from 'antd';
import './form.css'
const CurrentSection = (props)=>{
  switch (props.sectionId) {
    case 0:
      return <MainInformations/>
    case 1:
      return <FoodSelections/>
    case 2:
      return <ActivietiesSelections/>
    case 3:
      return <TourGuideSelections/>
    case 4:
      return <BudgetSelections/>
    default:
      return <FoodSelections/>

  }
}

class Application extends Component{
  render(){
    const { formScreenNumber } = this.props;
    return (
            <div className='fields-container'>
              <Row>
                <Col span={12} offset={6}>
                  <CurrentSection sectionId={formScreenNumber} />
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={12}>
                  <Button style={{ width: '100%' }} onClick={(e)=>{console.log(e.target);this.props.NavigateToNextSection()}} type="primary" htmlType="submit" className="login-form-button">
                     Next
                  </Button>
                </Col>
              </Row>
            </div>
          )
        }
      }

const mapStateToProps = state =>({
  formScreen:state.categories.formScreen,
  formScreenNumber:state.categories.formScreenNumber
})

export default  connect(mapStateToProps , { NavigateToNextSection })(Application);
