// NPM Imports
import { Layout, Menu, Row, Col, Card, InputNumber} from "antd";
import propTypes from "prop-types";
import React from "react";

// Local Imports & Constants
import Application from "../../components/Application";
import {ToggleButton} from 'react-bootstrap';
const { Header, Content, Footer } = Layout;

const Rejected = ({ logout, user }) => {
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
              <Card className="font" title="Thanks for Applying!">
                <p className="font">
                  Thank you for applying to join a Bits of Good
                  Project Team! Unfortunately we are unable to place you on a
                  team at this time. We received many applications and because
                  we only have a fixed number of projects we had to turn down
                  some good people.
                </p>
                <p className="font">
                  We are currently working on opening up new positions to get
                  more people invovled with Bits of Good! We will reach out
                  to you and keep you posted with new opportunities!
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

Rejected.propTypes = {
  logout: propTypes.func,
  user: propTypes.object
};

export default Rejected;
