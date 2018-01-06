import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, user, logout, register, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Component user={user} logout={logout} register={register} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
);

PrivateRoute.propTypes = {
  user: PropTypes.object,
  component: PropTypes.func,
  logout: PropTypes.func,
  register: PropTypes.func,
  location: PropTypes.string,
  authenticated: PropTypes.bool
};

export default PrivateRoute;