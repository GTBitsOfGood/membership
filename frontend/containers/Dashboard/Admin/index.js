// NPM Imports
import { Layout, Menu, Row, Col, Card, InputNumber } from "antd";
import propTypes from "prop-types";
import React from "react";
import { Route, Switch, Link} from "react-router-dom";

// Local Imports & Constants
import Applicants from "./Applicants";
import Home from "./Home";
import Selection from "./Selection";
import Projects from "./Projects";
const { Header, Content, Footer } = Layout;

const Admin = ({ logout, user }) => {
  const navigate = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (<Layout className="layout">
      <Header>
        <div className="menu-title">GT Bits of Good</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} style={{ lineHeight: "64px" }} onClick={navigate}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="applicants">
            <Link to="/applicants">Applicants</Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="selection">
            <Link to="/selection">Selection</Link>
          </Menu.Item>
          <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className="content-container">
        <div className="content">
          <Switch>
            <Route exact path="/applicants/:id" component={Applicants} />
            <Route exact path="/projects/:id" component={Projects} />
            <Route exact path="/selection/:id" component={Selection} />
            <Route exact path="/applicants" component={Applicants} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/selection" component={Selection} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Content>
      <Footer className="center">
        Made with &#9829; by Bits of Good ©2018
      </Footer>
    </Layout>);
};

Admin.propTypes = {
  logout: propTypes.func,
  user: propTypes.object
};

export default Admin;
