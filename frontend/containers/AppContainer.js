import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Splash from './Splash';

import Navbar from '../components/Navbar';

import * as actions from '../actions/auth';

import {Layout} from 'antd';

const AppContainer = ({ logout }) => {
  const {Header, Content, Footer} = Layout;
  return (
    <Layout>
      <Header>
        <Navbar logoutAction={ logout } />
      </Header>
      <Content style={{padding: '0 50px'}}>
        <Splash />
      </Content>
    </Layout>

  );
};

AppContainer.propTypes = {
  logout: PropTypes.func
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
