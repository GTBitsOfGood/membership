// NPM Imports
import propTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { bindActionCreators } from 'redux';
import * as actions from "../../../ducks/admin";


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
              <Card title={<h3 className="center">Applications</h3>} >
                <h2 className="center">
                  {
                    this.props.numAppsAccepted +
                    this.props.numAppsRejected +
                    this.props.numAppsSubmitted
                  }
                </h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">PM Interest</h3>} >
                <h2 className="center">
                  {
                    this.props.numPMInterest
                  }
                </h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">Accepted</h3>} >
                <h2 className="center">
                  {
                    this.props.numAppsAccepted
                  }
                </h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card title={<h3 className="center">Acceptance Rate</h3>} >
                <h2 className="center">
                  {Math.round(((this.props.numAppsAccepted) / (this.props.numAppsRejected + this.props.numAppsSubmitted + this.props.numAppsAccepted)) * 100)}%
                </h2>
              </Card>
            </Col>
          </Row>
        </div>
        <Row gutter={16}>
          <Col span={16}>
            <Card title={<h3 className="center">Newest Applications</h3>} bordered={false}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title={<h3 className="center">Admin Actions</h3>} bordered={false}>
              <ul>
                <li>New Application</li>
                <li>New Project</li>
              </ul>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  numAppsSubmitted: propTypes.number,
  numAppsRejected: propTypes.number,
  numAppsAccepted: propTypes.number,
  numPMInterest: propTypes.number,
};

function mapStateToProps(state) {
  return {
    numAppsSubmitted: state.admin.numAppsSubmitted,
    numAppsRejected: state.admin.numAppsRejected,
    numAppsAccepted: state.admin.numAppsAccepted,
    numPMInterest: state.admin.numPMInterest,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
