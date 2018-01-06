// NPM Imports
import { Layout, Menu, Breadcrumb } from "antd";
import propTypes from "prop-types";
import React from "react";

// Local Imports & Constants
import Application from "../../components/Application";
const { Header, Content, Footer } = Layout;


const Visitor = ({ logout, register, user }) => {
  const navigate = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (<Layout className="layout">
    <Header>
      <div className="menu-title">GT Bits of Good</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["application"]} style={{ lineHeight: "64px" }} onClick={navigate}>
        <Menu.Item key="application">Application</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    </Header>
    <Content className="content-container">
      <div className="content">
        <Application register={register} />
      </div>
    </Content>
    <Footer className="center">Made with &#9829; by Bits of Good ©2018</Footer>
  </Layout>);
};

Visitor.propTypes = {
  logout: propTypes.func,
  register: propTypes.func,
  user: propTypes.object
};

export default Visitor;
