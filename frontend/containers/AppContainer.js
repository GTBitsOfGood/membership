import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Splash from './Splash';

import Navbar from '../components/Navbar';
import Clean from '../components/Clean';
import MemberDash from "./MemberDash";
import Application from "../components/Application";

import * as actions from '../actions/auth';

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;


const AppContainer = ({ logout }) => {
  return (

    <Layout className="layout">
      <Header>
        <Navbar />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: "500" }}>
          {/* Content
          <Splash /> */}
          <Application />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>);
  // const {Header, Content, Footer} = Layout;
  // return (
  //   <Layout>
  //     <Header>
  //       <Navbar logoutAction={ logout } />
  //     </Header>
  //     <Content style={{padding: '0 50px'}}>
  //       <Splash />
  //     </Content>
  //   </Layout>

  // );
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
