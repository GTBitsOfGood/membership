// NPM Imports
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Button,
  Icon,
  Rate,
  Input,
  DatePicker,
  Tooltip
} from "antd";
import React, { Component } from "react";
import propTypes from "prop-types";

// Local Imports and Constants
import {
  programmingLanguages,
  webTechnologies,
  deployment,
  databases,
  frontEndFamiliarity,
  backEndFamiliarity,
  graduation_dates
} from "./questions";
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class Application extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 }
    };
    return (<div>
      <h1 className="center">Join Bits of Good!</h1>
      <p className="application-intro">
        Thanks for your interest in joining Bits of Good! We are excited
          you want to join our family and build your skills while also
          serving the Atlanta community! This Application is for us to get
          to know you so that we can try our best to match you with a
          project where you can contribute and grow.
        </p>
      <Form onSubmit={this.handleSubmit}>
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
              {
                required: true,
                message: "Please input your phone number!"
              }
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
        <FormItem {...formItemLayout} label="Graduation Date" hasFeedback>
          {getFieldDecorator("graduation_date", {
            rules: [
              {
                required: true,
                message: "Please select graduation date!"
              }
            ]
          })(<Select placeholder="Select Graduation Date">
            {graduation_dates().map((date, index) => <Option key={date} value={date}> {date} </Option>)}
          </Select>)}
        </FormItem>

        {/* Programming Languages */}
        <FormItem {...formItemLayout} label="Programming Languages">
          {getFieldDecorator("programming-language")(<Select mode="multiple" placeholder="Select Proficient Languages">
            {programmingLanguages.map((item, index) => (
              <Option key={`${item + index}`} value={item}>
                {item}
              </Option>
            ))}
          </Select>)}
        </FormItem>

        {/* Web Technologies */}
        <FormItem {...formItemLayout} label="Web Technologies">
          {getFieldDecorator("web-technology")(<Select mode="multiple" placeholder="Select Proficient Web Technologies">
            {webTechnologies.map((item, index) => (
              <Option key={`${item + index}`} value={item}>
                {item}
              </Option>
            ))}
          </Select>)}
        </FormItem>

        {/* Database Technology */}
        <FormItem {...formItemLayout} label="Database Technologies">
          {getFieldDecorator("database-technology")(<Select mode="multiple" placeholder="Select Proficient Database Technologies">
            {databases.map((item, index) => (
              <Option key={`${item + index}`} value={item}>
                {item}
              </Option>
            ))}
          </Select>)}
        </FormItem>

        {/* Deployment Technology */}
        <FormItem {...formItemLayout} label="Deployment Technologies">
          {getFieldDecorator("deployment-technology")(<Select mode="multiple" placeholder="Select Proficient Deployment Technologies">
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
                required: true
              }]
          })(<Select placeholder="Select Frontend Proficiency">
            {frontEndFamiliarity.map((item, index) => (
              <Option key={`${item + index}`} value={item}>
                {item}
              </Option>
            ))}
          </Select>)}
        </FormItem>

        {/* Backend Experience */}
        <FormItem {...formItemLayout} label="Backend Experience">
          {getFieldDecorator("backend-experience", {
            rules: [
              {
                required: true
              }]
          })(<Select placeholder="Select Backend Proficiency">
            {backEndFamiliarity.map((item, index) => (
              <Option key={`${item + index}`} value={item}>
                {item}
              </Option>
            ))}
          </Select>)}
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
          })(<TextArea placeholder="Why do you want to be part of Bits of Good?" autosize={{ minRows: 2, maxRows: 6 }} />)}
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
          })(<TextArea placeholder="Tell us about a time when you worked on a team." autosize={{ minRows: 2, maxRows: 6 }} />)}
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
          })(<TextArea placeholder="Tell us about your favorite project (ex. school, personal, internship, research)" autosize={{ minRows: 2, maxRows: 6 }} />)}
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
          })(<TextArea placeholder="What other commitments do you have this semester (ex. TA, Clubs, Greek Life, etc.)" autosize={{ minRows: 2, maxRows: 6 }} />)}
        </FormItem>

        {/* Project Preference */}
        <FormItem {...formItemLayout} label={<span>
          Project Preference&nbsp;
                <Tooltip title={<span>
            Click to <a href="https://bitsofgood.org" target="_blank">
              view projects
                      </a>
          </span>}>
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
          })(<TextArea placeholder="What projects are you most interested in?" autosize={{ minRows: 2, maxRows: 6 }} />)}
        </FormItem>

        {/* PM Interest */}
        <FormItem {...formItemLayout} label={<span>
          Project Manager Interest&nbsp;
                <Tooltip title="Are you interestd in being a project manager?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>}>
          {getFieldDecorator("pm-interest", {
            valuePropName: "checked"
          })(<Switch />)}
        </FormItem>

        <FormItem wrapperCol={{ span: 10, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </FormItem>
      </Form>
    </div>);
  }
}

Application.propTypes = {
  form: propTypes.object
};

const WrappedApplication = Form.create()(Application);

export default WrappedApplication;
