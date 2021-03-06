// NPM Imports
import { Layout, Menu, Row, Col, Card, InputNumber } from 'antd';
import propTypes from 'prop-types';
import React from 'react';

// Local Imports & Constants
const { Header, Content, Footer } = Layout;

const Member = ({ logout, user }) => {
  const navigate = ({ key }) => {
    if (key === 'logout') {
      logout();
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="menu-title">GT Bits of Good</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{ lineHeight: '64px' }}
          onClick={navigate}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className="content-container">
        <div className="content">
          <h1>Member Dash</h1>
        </div>
      </Content>
      <Footer className="center">
        Made with &#9829; by Bits of Good ©2018
      </Footer>
    </Layout>
  );
};

Member.propTypes = {
  logout: propTypes.func,
  user: propTypes.object
};

export default Member;
