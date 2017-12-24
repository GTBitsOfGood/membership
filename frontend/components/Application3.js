import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
} from 'antd';
import React from 'react';

import SelectMultiple from './Application/select-multiple';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const programmingLanguages = ['Python',	'C',	'Java',	'C++',	'C#',	'JavaScript',	'PHP',	'Go',	'Swift/Objective-C',	'Scala',	'Ruby',	'Web Assembly'];

class Demo extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 10 },
    };
    return (<Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Programming Languages">
          {getFieldDecorator("programming-languages", {
            rules: [
              {
                required: true,
                message: "Please select the programming languages your are proficient with.",
                type: "array"
              }
            ]
          })(<Select mode="multiple" placeholder="Select Proficient Languages">
              {programmingLanguages.map(item => <Option value={item}>{item}</Option>)}
            </Select>)}
        </FormItem>

        <FormItem {...formItemLayout} label="InputNumber">
          {getFieldDecorator("input-number", {
            initialValue: 3
          })(<InputNumber min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </FormItem>

        <FormItem {...formItemLayout} label="Switch">
          {getFieldDecorator("switch", {
            valuePropName: "checked"
          })(<Switch />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Rate">
          {getFieldDecorator("rate", { initialValue: 3.5 })(<Rate />)}
        </FormItem>

        <FormItem wrapperCol={{ span: 10, offset: 10 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>);
  }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo;