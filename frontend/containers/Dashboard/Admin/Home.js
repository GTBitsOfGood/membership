// NPM Imports
import propTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Card, Col, Row } from 'antd';

// Local Imports
// import Dashboard from "./Dashboard";
// import Splash from "../components/Splash";
// import { login, logout } from "../ducks/auth";
// import PrivateRoute from "../components/PrivateRoute";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() { }

  render() {
    return (
      <div>
        <div style={{ background: '#edf6ff', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Card title={<h3 className="center">Applications Received</h3>} >
                <h2 className="center">101</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">PM Interest</h3>} >
                <h2 className="center">5</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">Members Placed</h3>} >
                <h2 className="center">50</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">Acceptance Rate</h3>} >
                <h2 className="center">34%</h2>
              </Card>
            </Col>
          </Row>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title={<h3 className="center">Newest Applications</h3>} bordered={false}>Card content</Card>
          </Col>
          <Col span={12}>
            <Card title={<h3 className="center">Project Spotlight</h3>} bordered={false}>Card content</Card>
          </Col>

        </Row>
      </div>
    );
  }
}

Home.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
