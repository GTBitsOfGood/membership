// NPM Imports
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
// Local Imports
// import Dashboard from "./Dashboard";
// import Splash from "../components/Splash";
// import { login, logout } from "../ducks/auth";
// import PrivateRoute from "../components/PrivateRoute";

class Selection extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}

  render() {
    return (
      <div>
        <h1>Time to get this going :)</h1>
        <div id="board">
          <Card
            title="Applicants"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            title="Team 1"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            title="Team 2"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            title="Applicants"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            title="Team 1"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card
            title="Team 2"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    );
  }
}

Selection.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
