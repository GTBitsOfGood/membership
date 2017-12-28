// NPM Imports
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

// Local Imports
import Dashboard from "./Dashboard";
import Splash from '../components/Splash';
import { login, logout } from "../ducks/auth";


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
    this._authenticate = this._authenticate.bind(this);
  }
  componentWillMount() {
    this.props.authenticate();
  }
  _login() {
    return this.props.user ? <Redirect to="/" /> : <Splash />;
  }
  _authenticate() {
    return this.props.user ? <Dashboard user={this.props.user} logout={this.props.logout}/> : <Redirect to="/login"/>;
  }

  render() {
    return (<Switch>
        <Route path="/login" render={this._login} />
        <Route path="/*" render={this._authenticate} />
      </Switch>);
  }
}

AppContainer.propTypes = {
  user: propTypes.object,
  authenticate: propTypes.func,
  logout: propTypes.func
};

function mapStateToProps(state) {
  return { user: state.auth.user };
}

function mapDispatchToProps(dispatch) {
  return { authenticate: () => dispatch(login()), logout: () => dispatch(logout()) };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
