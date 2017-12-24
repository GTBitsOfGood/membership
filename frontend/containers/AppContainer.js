import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Splash from './Splash';

import Navbar from '../components/Navbar';
import Clean from '../components/Clean';
import MemberDash from "./MemberDash";
import Application from "../components/Application3";

import * as actions from '../actions/auth';

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;


const AppContainer = ({ logout }) => {
  return (<div style={{width: "600px"}}>
    <Application/>
  </div>);

    // <Layout className="layout">
    //   <Header>
    //     <Navbar />
    //   </Header>
    //   <Content style={{ padding: "0 50px" }}>
    //     {/* <Breadcrumb style={{ margin: "16px 0" }}>
    //     <Breadcrumb.Item>Home</Breadcrumb.Item>
    //     <Breadcrumb.Item>List</Breadcrumb.Item>
    //     <Breadcrumb.Item>App</Breadcrumb.Item>
    //   </Breadcrumb> */}
    //     <div style={{ background: "#fff", padding: 24, minHeight: "500" }}>
    //       Content
    //       <Splash />
    //     </div>
    //   </Content>
    //   <Footer style={{ textAlign: "center" }}>
    //     Ant Design ©2016 Created by Ant UED
    //   </Footer>
    // </Layout>);
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
