import React, {Component} from 'react';
import propTypes from "prop-types";
import { Form, Modal, Button, Input, Radio } from "antd";

const FormItem = Form.Item;

class ProjectCreationModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const {id, value} = event.target;
		const formData = Object.assign({}, this.state.formData, {[id]: value});
		console.log(formData);
		this.setState({formData});
	}

	render() {
		const { visible, onSubmit, onCancel, onInput, form, loading } = this.props;
		const { getFieldDecorator } = form;
		const {formData} = this.state;
		const { TextArea } = Input;

		return (
			<Modal
				visible={visible}
				title="Create a New Project"
				okText="Create"
				onCancel={onCancel}
				onOk={onSubmit}
				footer={[
					<Button key="cancel" onClick={onCancel}>Cancel</Button>,
					<Button key="submit" type="primary" loading={loading} onClick={() => onSubmit(formData)}>
						Create
					</Button>
				]}>
				<Form layout="vertical">
					<FormItem label="Organization">
						{getFieldDecorator('organization', {
							rules: [{ required: true, message: 'Please input the organization name!' }]
						})(<Input placeholder="Bits of Good" onChange={this.handleInputChange}/>)}
					</FormItem>
					<FormItem label="Description">
						{getFieldDecorator('description', {
							rules: [{required: true, message: 'Please enter the project description!' }]
						})(<TextArea autosize={{minRows: 4}} onChange={this.handleInputChange} placeholder="GTBits of Good is an organization which helps to empower local nonprofits in the Atlanta area." />)}
					</FormItem>
					<FormItem label="Website">
						{getFieldDecorator('website_url', {
							rules: [{ required: true, message: 'Pleae enter organization website!' }]
						})(<Input addonBefore="http://" onChange={this.handleInputChange} placeholder="bitsofgood.org" />)}
					</FormItem>
					<FormItem label="Contact Name">
						{getFieldDecorator('contact_name', {
							rules: [{ required: true, message: 'Please enter contact name!' }]
						})(<Input placeholder="George Burdell" onChange={this.handleInputChange}/>)}
					</FormItem>
					<FormItem label="Contact Email">
						{getFieldDecorator('contact_email', {
							rules: [
								{ required: true, message: 'Please enter contact email!' },
								{ type: 'email', message: 'Please enter a valid email.'}
							]
						})(<Input placeholder="gburdell3@gatech.edu" onChange={this.handleInputChange}/>)}
					</FormItem>
					<FormItem label="Contact Phone">
						{getFieldDecorator('contact_phone', {
							rules: [{ required: true, message: 'Please enter contact phone!' }]
						})(<Input placeholder="(516) 332-2529" onChange={this.handleInputChange}/>)}
					</FormItem>
				</Form>
			</Modal>
		)
	}
}

export default Form.create()(ProjectCreationModal);