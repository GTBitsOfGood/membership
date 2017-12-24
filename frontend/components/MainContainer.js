import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import * as actions from '../actions/auth';

class MainContainer extends Component {
  componentWillMount() {
    this.props.authenticate();
  }
  render() {
    return (
      <div>
        <h1>Main Component</h1>
      </div>

    );
  }
}

MainContainer.propTypes = {
  isAuthenticated: PropTypes.object,
  authenticate: PropTypes.func
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.user,

  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(actions, dispatch);
  return {
    authenticate: () => dispatch(actions.login())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
