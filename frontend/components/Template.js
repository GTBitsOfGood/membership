// NPM Packages
import { Layout, Menu, Breadcrumb } from "antd";
import propTypes from "prop-types";
import React from "react";

// Local Imports
import Navbar from "../components/Navbar";
const { Header, Content, Footer } = Layout;


const Template = ({ logout, component: Component, ...props }) => (
  <Layout className="layout">
    <Header>
      <Navbar logout={logout} />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#fff", padding: 24 }}>
        <Component {...props} />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      GT Bits of Good ©2018 Made with &#9829;
    </Footer>
  </Layout>
);

Template.propTypes = {
  logout: propTypes.func,
  component: propTypes.any,
};

export default Template;