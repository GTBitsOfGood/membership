// NPM Imports
import { Layout, Menu, Row, Col, Card } from "antd";
import propTypes from "prop-types";
import React from "react";

// Local Imports & Constants
import Application from "../../components/Application";
const { Header, Content, Footer } = Layout;

const Submitted = ({ logout, user }) => {
  const navigate = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (<Layout className="layout">
      <Header>
        <div className="menu-title">GT Bits of Good</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} style={{ lineHeight: "64px" }} onClick={navigate}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className="content-container">
        <div className="content">
          <Row type="flex" justify="centered">
            <Col span={12} offset={6}>
              <Card className="font" title="Application Pending">
                <p className="font">
                  Thank you so much for applying to join a Bits of Good
                  Project Team! We look forward to reviewing your application
                  and will get back to you by January XXXX to let you know
                  about project placement!
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer className="center">
        Made with &#9829; by Bits of Good ©2018
      </Footer>
    </Layout>);
};

Submitted.propTypes = {
  logout: propTypes.func,
  user: propTypes.object
};

export default Submitted;
