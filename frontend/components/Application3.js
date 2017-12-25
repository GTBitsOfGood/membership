import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Input,
  DatePicker,
  Tooltip
} from "antd";
import React, { Component } from 'react';

import SelectMultiple from './Application/select-multiple';
import { programmingLanguages, webTechnologies, deployment, databases } from './Application/questions';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;


// confst programmingLanguages = ['Python',	'C',	'Java',	'C++',	'C#',	'JavaScript',	'PHP',	'Go',	'Swift/Objective-C',	'Scala',	'Ruby',	'Web Assembly'];

class Application extends Component {
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
        {/* Name */}
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>

        {/* Email */}
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </FormItem>

        {/* Cell Phone */}
        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>

        {/* Credit Hours */}
        <FormItem {...formItemLayout} label="Credit Hours">
          {getFieldDecorator("credit-hours", {
            initialValue: 14,
            rules: [
              {
                required: true,
                message:
                  "Please input the number of credit hours you are taking this semester!"
              }
            ]
          })(<InputNumber min={12} max={20} />)}
        </FormItem>

        {/* Graduation Date */}
        <FormItem {...formItemLayout} label="Graduation Date">
          {getFieldDecorator("graduation-date", {
            rules: [
              {
                type: "object",
                required: true,
                message: "Please select graduation date!"
              }
            ]
          })(<DatePicker />)}
        </FormItem>

        {/* Programming Languages */}
        <FormItem {...formItemLayout} label="Programming Languages">
          {getFieldDecorator("programming-language", {
            rules: [
              {
                required: true,
                message:
                  "Please select the programming languages you are proficient with.",
                type: "array"
              }
            ]
          })(<Select mode="multiple" placeholder="Select Proficient Languages">
              {programmingLanguages.map((item, index) => (
                <Option key={`${item + index}`} value={item}>
                  {item}
                </Option>
              ))}
            </Select>)}
        </FormItem>

        {/* Web Technologies */}
        <FormItem {...formItemLayout} label="Web Technologies">
          {getFieldDecorator("web-technology", {
            rules: [
              {
                required: true,
                message:
                  "Please select the web technologies you are proficient with.",
                type: "array"
              }
            ]
          })(<Select mode="multiple" placeholder="Select Proficient Web Techs">
              {webTechnologies.map((item, index) => (
                <Option key={`${item + index}`} value={item}>
                  {item}
                </Option>
              ))}
            </Select>)}
        </FormItem>

        {/* Database Technology */}
        <FormItem {...formItemLayout} label="Database Technologies">
          {getFieldDecorator("database-technology", {
            rules: [
              {
                required: true,
                message:
                  "Please select the database technologies you are proficient with.",
                type: "array"
              }
            ]
          })(<Select mode="multiple" placeholder="Select Proficient Database Techs">
              {databases.map((item, index) => (
                <Option key={`${item + index}`} value={item}>
                  {item}
                </Option>
              ))}
            </Select>)}
        </FormItem>

        {/* Deployment Technology */}
        <FormItem {...formItemLayout} label="Deployment Technologies">
          {getFieldDecorator("deployment-technology", {
            rules: [
              {
                required: true,
                message:
                  "Please select the deployment technologies you are proficient with.",
                type: "array"
              }
            ]
          })(<Select mode="multiple" placeholder="Select Proficient Deployment Techs">
              {deployment.map((item, index) => (
                <Option key={`${item + index}`} value={item}>
                  {item}
                </Option>
              ))}
            </Select>)}
        </FormItem>

        {/* Frontend Experience */}
        <FormItem {...formItemLayout} label="Frontend Experience">
          {getFieldDecorator("frontend-experience", {
            rules: [
              {
                required: true,
                message:
                  "Please select how comfortable you are with frontend development."
              }
            ]
          })(<Rate />)}
        </FormItem>

        {/* Backend Experience */}
        <FormItem {...formItemLayout} label="Backend Experience">
          {getFieldDecorator("backend-experience", {
            rules: [
              {
                required: true,
                message:
                  "Please select how comfortable you are with backend development."
              }
            ]
          })(<Rate />)}
        </FormItem>

        {/* BG interest */}
        <FormItem {...formItemLayout} label="Bits of Good Interest">
          {getFieldDecorator("bg-interest", {
            rules: [
              {
                required: true,
                message: "Please answer the question!",
                whitespace: true
              }
            ]
          })(<TextArea placeholder="Why do you want to be part of Bits of Good?" />)}
        </FormItem>

        {/* Teamwork */}
        <FormItem {...formItemLayout} label="Teamwork Experience">
          {getFieldDecorator("teamwork-experience", {
            rules: [
              {
                required: true,
                message: "Please answer the question!",
                whitespace: true
              }
            ]
          })(<TextArea placeholder="Tell us about a time when you worked on a team." />)}
        </FormItem>

        {/* Project */}
        <FormItem {...formItemLayout} label="Project Experience">
          {getFieldDecorator("project-experience", {
            rules: [
              {
                required: true,
                message: "Please answer the question!",
                whitespace: true
              }
            ]
          })(<TextArea placeholder="Tell us about your favorite project (ex. school, personal, internship, research)" />)}
        </FormItem>

        {/* Commitments */}
        <FormItem {...formItemLayout} label="Other Commitments">
          {getFieldDecorator("other-commitments", {
            rules: [
              {
                required: true,
                message: "Please answer the question!",
                whitespace: true
              }
            ]
          })(<TextArea placeholder="What other commitments do you have this semester (ex. TA, Clubs, Greek Life, etc.)" />)}
        </FormItem>

        {/* Project Preference */}
        <FormItem {...formItemLayout} label={<span>
              Project Preference&nbsp;
              <Tooltip title={(<span>Click to <a href="https://bitsofgood.org" target="_blank">view projects</a></span>)}>
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
          {getFieldDecorator("project-preference", {
            rules: [
              {
                required: true,
                message: "Please answer the question!",
                whitespace: true
              }
            ]
          })(<TextArea placeholder="What projects are you most interested in?" />)}
        </FormItem>

        {/* PM Interest */}
        <FormItem {...formItemLayout} label="Project Manager Interest">
          {getFieldDecorator("pm-interest", {
            valuePropName: "checked"
          })(<Switch />)}
        </FormItem>

        <FormItem wrapperCol={{ span: 10, offset: 10 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>);
  }
}

const WrappedApplication = Form.create()(Application);

export default WrappedApplication;