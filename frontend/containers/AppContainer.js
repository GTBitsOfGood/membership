import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import Splash from './Splash';

import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';
import PrivateRoute from '../components/PrivateRoute';

import * as actions from '../actions/auth';


// const AppContainer = ({ logout, status }) => {

// import * as actions from '../actions/auth';

class AppContainer extends Component {
  componentWillMount() {
    console.log('about to authenticate');
    this.props.authenticate();
  }

  render() {
    return (
      <div>
        <Navbar logoutAction={this.props.logout} />
        <Route path="/login"  component={Splash} />
        <PrivateRoute path="/" exact authenticated={this.props.status} component={MainContainer} />
      </div>

    );
  }

}

AppContainer.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.bool,
  authenticate: PropTypes.func
};

function mapStateToProps(state) {
  return {
    status: !!state.auth.user,

  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(actions, dispatch);
  return {
    authenticate: () => dispatch(actions.login()),
    logout: () => dispatch(actions.logout()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
