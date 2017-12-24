import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Splash from "./Splash";

import Navbar from "../components/Navbar";
import Clean from "../components/Clean";

import * as actions from "../actions/auth";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

class MemberDash extends Component {
  render() {
    return (<Layout className="layout" >
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: "50px"}}>
          <div
            style={{ background: "#fff", padding: 24, minHeight: "600"}}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          GT Bits of Good ©2018
        </Footer>
      </Layout>);
  }
}


MemberDash.propTypes = {
  logout: PropTypes.func
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDash);
