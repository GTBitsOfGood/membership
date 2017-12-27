import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";


import Splash from "./Splash";

import Navbar from "../components/Navbar";
import Clean from "../components/Clean";
import MemberDash from "./MemberDash";
import Application from "../components/Application";

import Template from "../components/Template";

import * as actions from "../ducks/auth";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const MainContainer = ({ logout }) => {
  return (<Layout className="layout">
      <Header>
        <Navbar logout={logout} />
      </Header>
      <Content style={{ padding: "0 50px"}}>
        <div style={{ background: "#fff", padding: 24 }}>
          <Switch>
            <Route path="/application" component={Application} />
            <Route path="/" component={Splash} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Made with &#9829; by Bits of Good ©2018
      </Footer>
    </Layout>);
};

MainContainer.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.bool,
  authenticate: PropTypes.func
};

function mapStateToProps(state) {
  return {
    status: !!state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(actions, dispatch);
  return {
    authenticate: () => dispatch(actions.login()),
    logout: () => dispatch(actions.logout())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  MainContainer
));
