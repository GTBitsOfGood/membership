import React, { Component } from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";
import { Icon, Card, Row, Col, Table } from "antd";

import "react-table/react-table.css";
import NotFound from "../../../../../components/NotFound";

import { teamColumns } from "../columns";
import BasicInfo from "./basic-info";
import CodingInfo from "./coding-info";
import ResponsesInfo from "./responses-info";
const tabTitles = [
  {
    key: "basic",
    tab: "Basic Info"
  },
  {
    key: "coding",
    tab: "Coding Experience"
  },
  {
    key: "responses",
    tab: "Free Responses"
  }
];


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleKey: "basic"
    };

    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(titleKey) {
    this.setState({ titleKey });
  }

  render() {
    return !this.props.data ? <NotFound /> : <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card cover={<img alt="example" src={this.props.data.github_avatar_url} />} actions={[<Icon type="edit" onClick={() => alert("clicked")} />, <Icon type="delete" />]}>
              <Card.Meta title={this.props.data.name} description={<div>
                <p>Application Status: {this.props.data.application_status.toUpperCase()}</p>
                    <a target="_blank" href={this.props.data.github_profile_url}>
                      {this.props.data.github_profile_url}
                    </a>
                  </div>} />
            </Card>
          </Col>
          <Col span={16}>
            <Card style={{ width: "100%" }} tabList={tabTitles} onTabChange={key => this.onTabChange(key)}>
              {this.state.titleKey === "basic" && <BasicInfo data={this.props.data} />}
              {this.state.titleKey === "coding" && <CodingInfo data={this.props.data} />}
              {this.state.titleKey === "responses" && <ResponsesInfo data={this.props.data} />}
            </Card>
          </Col>
        </Row>
      </div>;
  }
}

Profile.propTypes = {
  data: propTypes.object,
  match: propTypes.object
};

export default Profile;
