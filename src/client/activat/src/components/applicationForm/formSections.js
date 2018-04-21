import React from 'react';
import { Form, Select, Input, Checkbox, Button, Row ,Col,DatePicker} from 'antd';
import moment from 'moment';



const { TextArea } = Input;
const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

// camel,riding,hourse riding , Professional photograph, Buggies


export const MainInformations = (props)=>{
  return(
    <div >
        <Row>
        <Col span={12}>
          Chooes type of trip
        </Col>
        <Col span={12}>
        <Select    style={{ width: '100%' }} >
          <Option value="1">Family</Option>
          <Option value="2">Romantic</Option>
          <Option value="3">Friends</Option>
          </Select>
        </Col>
      </Row>
      <Row>
      <Col span={12}>
        Pick Up Your Location
      </Col>
      <Col span={12}>
      <Select    style={{ width: '100%' }} >
        <Option value="1">Dubai</Option>
        <Option value="2">Abu Dhabi</Option>
        <Option value="3">Ras Al Khima</Option>
        <Option value="4">Sharjah</Option>
        <Option value="5">Ajman</Option>
        <Option value="6">Om Al queen</Option>
        </Select>
      </Col>
      </Row>
      <Row>
      <Col span={12}>
        Pick Up Your Range Of Date
      </Col>
      <Col span={12}>
      <RangePicker
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        />
        <br />
      </Col>

      </Row>
      <Row>
      <Col span={12}>
        Pick Up Your Time Of trip
      </Col>
      <Col span={12}>
      <DatePicker
           style={{ width: '100%' }}
           showTime
           format="YYYY-MM-DD HH:mm:ss"
           placeholder="Select Time"
         />
      </Col>

      </Row>
    </div>
  )
}
export const FoodSelections = (props)=>{
  const state = { checked : true }
  const label = `${state.checked ? 'include' : 'not include'}`;

  return(

        <div>
            <Row>
            <Col span={9} offset={6}>
            <p style={{ marginBottom: '20px' }}>
              Do You Like to include the Food in the Tour ?<br/>
             <Checkbox
               onClick={()=>state.checked ?state.checked=false : state.checked=true  }
               checked={state.checked }>
               {label}
             </Checkbox>
             </p>
          <p>
           <Button
             type="primary"
             size="small">
           {!state.checked ? 'Check' : 'Uncheck'}
         </Button>
       </p>
       </Col>
      </Row>
    </div>
  )
}

export const ActivietiesSelections = (props)=>{
  const plainOptions = ['Camel', 'Riding', 'Hourse', 'Professional photograph', 'Buggies'];
  const defaultCheckedList = ['Hourse', 'Riding'];
  this.onChange = (checkedList) => {
    this.state = {
      ...this.state,
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    };
  }
  this.onCheckAllChange = (e) => {
    this.state = {
      ...this.state,
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    };
  }
  this.state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  return(
      <Row>
          <Col span={9} offset={6}>
              <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                  <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                  >
                    Check all
                  </Checkbox>
                </div>
                <br />
                <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
            </div>
            <div style={{ margin: '24px 0' }} />
            <TextArea placeholder="Plesae specify what do you like to do,And What kind of a" autosize={{ minRows: 3, maxRows: 6 }} />
        </Col>
   </Row>
  )
}

export const TourGuideSelections = (props)=>{
  const state = { checked : true }
  const label = `${state.checked ? 'include' : 'not include'}`;
  const plainOptions = ['Arabic speaker', 'english speaker'];
  const defaultCheckedList = ['Arabic speaker'];
  return(
        <div>
            <Row>
            <Col span={9} offset={6}>
            <p style={{ marginBottom: '20px' }}>
              Do You Like to include the Food in the Tour ?<br/>
             <Checkbox
               onClick={()=>state.checked ?state.checked=false : state.checked=true  }
               checked={state.checked }>
               {label}
             </Checkbox>
             </p>
          <p>
           <Button
             type="primary"
             size="small">
           {!state.checked ? 'Check' : 'Uncheck'}
         </Button>
       </p>
       </Col>
      </Row>
    </div>
  )
  }

export const BudgetSelections = (props)=>{

}

export const SignUp = (props)=>{

}
