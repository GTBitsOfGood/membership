// NPM Imports
import { Form, Button, Input } from 'antd';
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Local Imports and Constants

const FormItem = Form.Item;
const { TextArea } = Input;

class CreateProject extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createProject(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 }
    };
    return (
      <div>
        <h1 className="center">Create New Project</h1>

        <Form onSubmit={this.handleSubmit}>
          {/* organization */}
          <FormItem {...formItemLayout} label="Organization">
            {getFieldDecorator('organization', {
              rules: [
                {
                  required: true,
                  message: 'Please input Organization Name!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>

          {/* Website URL */}
          <FormItem {...formItemLayout} label="Website Link">
            {getFieldDecorator('website_url', {
              rules: [
                {
                  required: true,
                  message: "Please input a link to Org's website"
                }
              ]
            })(<Input style={{ width: '100%' }} />)}
          </FormItem>

          {/* Photo_URL */}
          <FormItem {...formItemLayout} label="Photo Link">
            {getFieldDecorator('photo_url', {
              rules: [
                {
                  required: true,
                  message: 'The input a link to a photo'
                }
              ]
            })(<Input />)}
          </FormItem>

          {/* Contact Name */}
          <FormItem {...formItemLayout} label="Contact Name">
            {getFieldDecorator('contact.name', {
              rules: [
                {
                  required: true,
                  message: 'Please name of contact for organization'
                }
              ]
            })(<Input />)}
          </FormItem>

          {/* Contact Email */}
          <FormItem {...formItemLayout} label="Contact Email">
            {getFieldDecorator('contact.email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input Contacts E-mail!'
                }
              ]
            })(<Input />)}
          </FormItem>

          {/* Contact Cell Phone */}
          <FormItem {...formItemLayout} label="Contact Phone Number">
            {getFieldDecorator('contact.phone', {
              rules: [
                {
                  required: true,
                  message: 'Please input Contacts phone number!'
                }
              ]
            })(<Input style={{ width: '100%' }} />)}
          </FormItem>

          {/* Description */}
          <FormItem {...formItemLayout} label="Project Description">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Please provide a project description',
                  whitespace: true
                }
              ]
            })(
              <TextArea
                placeholder="Briefly describe the project for this organization"
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            )}
          </FormItem>

          <FormItem wrapperCol={{ span: 10, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

CreateProject.propTypes = {
  form: propTypes.object,
  createProject: propTypes.func
};

const WrappedCreateProject = Form.create()(CreateProject);

export default WrappedCreateProject;
