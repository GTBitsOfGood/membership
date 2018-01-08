import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Icon, Card, Row, Col, Modal } from 'antd';

import NotFound from '../../../../../components/NotFound';

import BasicInfo from './basic-info';
import CodingInfo from './coding-info';
import ResponsesInfo from './responses-info';
const tabTitles = [
  {
    key: 'basic',
    tab: 'Basic Info'
  },
  {
    key: 'coding',
    tab: 'Coding Experience'
  },
  {
    key: 'responses',
    tab: 'Free Responses'
  }
];

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleKey: 'basic',
      loading: true,
      timer: null,
      adminModalShowing: false,
      deleteModalShowing: false
    };

    this.onTabChange = this.onTabChange.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.showAdminModal = this.showAdminModal.bind(this);
    this.handleAdminModalOk = this.handleAdminModalOk.bind(this);
    this.handleAdminModalCancel = this.handleAdminModalCancel.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.handleDeleteModalOk = this.handleDeleteModalOk.bind(this);
    this.handleDeleteModalCancel = this.handleDeleteModalCancel.bind(this);
  }

  componentWillMount() {
    const timer = setTimeout(this.stopLoading, 500);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  showAdminModal() {
    this.setState({ adminModalShowing: true });
  }

  handleAdminModalOk() {
    // just need to make the DB call here to make this happen.
    this.setState({ adminModalShowing: false });
  }
  handleAdminModalCancel() {
    this.setState({ adminModalShowing: false });
  }
  showDeleteModal() {
    this.setState({ deleteModalShowing: true });
  }

  handleDeleteModalOk() {
    // just need to make the DB call here to make this happen.
    this.setState({ deleteModalShowing: false });
  }
  handleDeleteModalCancel() {
    this.setState({ deleteModalShowing: false });
  }
  stopLoading() {
    this.setState({ loading: false });
  }

  onTabChange(titleKey) {
    this.setState({ titleKey });
  }

  render() {
    return !this.props.data || this.state.loading ? (
      <NotFound />
    ) : (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Modal
              title="Confirm User Role Change"
              visible={this.state.adminModalShowing}
              onOk={this.handleAdminModalOk}
              okText={'Make Admin'}
              onCancel={this.handleAdminModalCancel}
            >
              <p>Are you sure you want to promote this user to an Admin?</p>
              <p>This can only be reversed manually in the Database.</p>
            </Modal>
            <Modal
              title="Confirm User Delete"
              visible={this.state.deleteModalShowing}
              onOk={this.handleDeleteModalOk}
              okText={'Delete'}
              okType={'danger'}
              onCancel={this.handleDeleteModalCancel}
            >
              <p>Are you sure you want to Delete this user?</p>
              <p>This action cannot be undone </p>
            </Modal>
            <Card
              cover={
                <img alt="example" src={this.props.data.github.avatar_url} />
              }
              actions={[
                <Icon type="edit" onClick={() => alert('clicked edit user')} />,
                <Icon type="delete" onClick={this.showDeleteModal} />,
                <Icon type="usergroup-add" onClick={this.showAdminModal} />
              ]}
            >
              <Card.Meta
                title={this.props.data.name}
                description={
                  <div>
                    <p>
                      Application Status:{' '}
                      {this.props.data.application_status.toUpperCase()}
                    </p>
                    <a
                      target="_blank"
                      href={this.props.data.github.profile_url}
                    >
                      {this.props.data.github.profile_url}
                    </a>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={16}>
            <Card
              style={{ width: '100%' }}
              tabList={tabTitles}
              onTabChange={key => this.onTabChange(key)}
            >
              {this.state.titleKey === 'basic' && (
                <BasicInfo data={this.props.data} />
              )}
              {this.state.titleKey === 'coding' && (
                <CodingInfo data={this.props.data} />
              )}
              {this.state.titleKey === 'responses' && (
                <ResponsesInfo data={this.props.data} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Profile.propTypes = {
  data: propTypes.object,
  match: propTypes.object
};

export default Profile;
