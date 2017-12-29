// NPM Imports
import { Layout, Menu, Row, Col, Card, InputNumber } from "antd";
import propTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, withRouter} from "react-router-dom";
import { bindActionCreators } from 'redux';

// Local Imports & Constants
import Applicants from "./Applicants";
import Home from "./Home";
import Selection from "./Selection";
import Projects from "./Projects";
import ProjectProfile from "./Projects/profile";
import ApplicantProfile from "./Applicants/profile";
import * as actions from "../../../ducks/admin";

const { Header, Content, Footer } = Layout;


class Admin extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.currentKey = this.currentKey.bind(this);
  }
  componentWillMount() {
    this.props.loadProjects();
    this.props.loadApplicants();
    const url = this.props.match.url.split('/');
    if (url.length === 3) {
      if (url[1] === "projects") {
        this.props.updateCurrentProject(url[2]);
      } else if (url[1] === "applicants") {
        this.props.updateCurrentApplicant(url[2]);
      }
    }
  }
  navigate({ key }) {
    if (key === "logout") {
      this.props.logout();
    }
  }
  currentKey() {
    const toReturn = [];
    toReturn.push(this.props.match.url === "/" ? "home" : this.props.match.url.split("/")[1]);
    return toReturn;
  }
  render() {
    return (<Layout className="layout">
        <Header>
          <div className="menu-title">GT Bits of Good</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.currentKey()} style={{ lineHeight: "64px" }} onClick={this.navigate}>
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
              <Route exact path="/applicants/:id" render={props => <ApplicantProfile {...props} data={this.props.currentApplicant} />} />
              <Route exact path="/projects/:id" render={props => <ProjectProfile {...props} data={this.props.currentProject} />} />
              <Route exact path="/selection/:id" component={Selection} />
              <Route exact path="/applicants" render={() => <Applicants data={this.props.applicants} update={this.props.updateCurrentApplicant} />} />
              <Route exact path="/projects" render={() => <Projects data={this.props.projects} update={this.props.updateCurrentProject} />} />
              <Route exact path="/selection" component={Selection} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Content>
        <Footer className="center">
          Made with &#9829; by Bits of Good ©2018
        </Footer>
      </Layout>);
  }
}


Admin.propTypes = {
  logout: propTypes.func,
  match: propTypes.object,
  projects: propTypes.array,
  applicants: propTypes.array,
  loadProjects: propTypes.func,
  loadApplicants: propTypes.func,
  currentProject: propTypes.object,
  currentApplicant: propTypes.object,
  updateCurrentProject: propTypes.func,
  updateCurrentApplicant: propTypes.func,

};

function mapStateToProps(state) {
  return {
    projects: state.admin.projects,
    applicants: state.admin.applicants,
    currentProject: state.admin.currentProject,
    currentApplicant: state.admin.currentApplicant,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));

