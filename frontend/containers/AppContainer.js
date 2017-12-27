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
import Clean from '../components/Clean';
import { login, logout } from "../ducks/auth";
import PrivateRoute from '../components/PrivateRoute';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
  }
  componentWillMount() {
    this.props.authenticate();
  }
  _login() {
    return this.props.user ? <Redirect to={"/"} /> : <Clean />;
  }

  render() {
    return (<Switch>
        <Route path="/login" render={this._login} />
        <PrivateRoute path="/*" user={this.props.user} component={Dashboard} logout={this.props.logout} authenticated={!!this.props.user} />
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
