import propTypes from "prop-types";
import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";


import Splash from "./Splash";

// import Navbar from "../components/Navbar";
import Clean from "../components/Clean";
import MemberDash from "./MemberDash";
import Application from "../components/Application";

import Template from "../components/Template";


import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const MainContainer = ({ logout, user }) => {
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
  logout: propTypes.func,
  user: propTypes.object
};

export default MainContainer;
