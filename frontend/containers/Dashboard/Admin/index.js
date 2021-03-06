// NPM Imports
import { Layout, Menu } from 'antd';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// Local Imports & Constants
import Applicants from './Applicants';
import Home from './Home';
import Selection from './Selection';
import Projects from './Projects';
import ProjectProfile from './Projects/profile';
// import ApplicantProfile from './Applicants/Profile';
import ApplicantProfile from '../../ApplicantProfile';
import * as actions from '../../../ducks/admin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.currentKey = this.currentKey.bind(this);
  }
  componentWillMount() {
    this.props.loadDashboard();
    this.props.loadProjects();
    this.props.loadApplicants();
    // check current url for applicant/project route
    const url = this.props.match.url.split('/');
    const currentProjectId = url[1] === 'projects' ? url[2] : undefined;
    const currentApplicantId = url[1] === 'applicants' ? url[2] : undefined;
    if (currentProjectId) {
      this.props.updateCurrentProject(currentProjectId);
    }
    if (currentApplicantId) {
      this.props.updateCurrentApplicant(currentApplicantId);
    }
  }

  navigate({ key }) {
    if (key === 'logout') {
      this.props.logout();
    }
  }

  currentKey() {
    return [
      this.props.match.url === '/' ? 'home' : this.props.match.url.split('/')[1]
    ];
  }

  render() {
    return (
      <Layout className="layout">
        <Layout.Header>
          <div className="menu-title">GT Bits of Good</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.currentKey()}
            style={{ lineHeight: '64px' }}
            onClick={this.navigate}
          >
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
            <Menu.Item key="logout" onClick={this.props.logout}>
              Logout
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content className="content-container">
          <div className="content">
            <Switch>
              <Route
                exact
                path="/applicants/:id"
                render={props => (
                  <ApplicantProfile
                    {...props}
                    data={this.props.currentApplicant}
                  />
                )}
              />
              <Route
                exact
                path="/projects/:id"
                render={props => (
                  <ProjectProfile {...props} data={this.props.currentProject} />
                )}
              />
              <Route exact path="/selection/:id" component={Selection} />
              <Route exact path="/applicants" component={Applicants} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/selection" component={Selection} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Layout.Content>
        <Layout.Footer className="center">
          Made with &#9829; by Bits of Good ©2018
        </Layout.Footer>
      </Layout>
    );
  }
}

Admin.propTypes = {
  logout: propTypes.func,
  match: propTypes.object,
  loadDashboard: propTypes.func,
  loadProjects: propTypes.func,
  loadApplicants: propTypes.func,
  currentProject: propTypes.object,
  currentApplicant: propTypes.object,
  updateCurrentProject: propTypes.func,
  updateCurrentApplicant: propTypes.func
};

function mapStateToProps(state) {
  return {
    currentProject: state.admin.currentProject,
    currentApplicant: state.admin.currentApplicant
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
