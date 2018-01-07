import React, { Component } from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";
import { Icon, Card, Row, Col, Table } from "antd";


import "react-table/react-table.css";
import NotFound from '../../../../components/NotFound';

import { teamColumns } from './columns';
const tabTitles = [
  {
    key: "description",
    tab: "Description"
  },
  {
    key: "team",
    tab: "Project Team"
  }
];

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Github",
    accessor: "github_username"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone",
    accessor: "phone"
  }
];


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleKey: "description",
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
    return (!this.props.data || this.state.loading) ? <NotFound /> : <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card cover={<img alt="example" src={this.props.data.photo_url} />} actions={[<Icon type="edit" onClick={() => alert("clicked")} />, <Icon type="delete" />]}>
            <Card.Meta title={this.props.data.organization} description={<a target="_blank" href={this.props.data.website_url}>
              {this.props.data.website_url}
            </a>} />
          </Card>
        </Col>
        <Col span={16}>
          <Card style={{ width: "100%" }} tabList={tabTitles} onTabChange={key => this.onTabChange(key)}>
            {this.state.titleKey === "description" && <p className="font">
              {this.props.data.description}
            </p>}
            {this.state.titleKey === "team" &&
              <Table columns={teamColumns()} dataSource={this.props.data.project_members} rowKey={record => record._id} />

            }
          </Card>
        </Col>
      </Row>
    </div>;
  }
}


Profile.propTypes = {
  data: propTypes.object,
  match: propTypes.object,
};

export default Profile;

