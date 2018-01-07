import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Icon, Card, Row, Col } from 'antd';

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
      timer: null
    };

    this.onTabChange = this.onTabChange.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }

  componentWillMount() {
    const timer = setTimeout(this.stopLoading, 500);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
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
            <Card
              cover={
                <img alt="example" src={this.props.data.github.avatar_url} />
              }
              actions={[
                <Icon type="edit" onClick={() => alert('clicked')} />,
                <Icon type="delete" />,
                <Icon type="usergroup-add" />
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
