// NPM Imports
import { Layout, Menu } from 'antd';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

// Local Imports & Constants
import Application from '../../components/Application';
import * as actions from '../../ducks/auth';

const { Header, Content, Footer } = Layout;

class VisitorDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      web: [],
      databases: [],
      deployment: []
    };

    this.navigate = this.navigate.bind(this);
  }

  componentWillMount() {
    const self = this;
    Promise.all([
      axios.get('/api/languages?category=languages'),
      axios.get('/api/languages?category=web_technologies'),
      axios.get('/api/languages?category=databases'),
      axios.get('/api/languages?category=deployment')
    ])
      .then(([langs, web, dbs, deploy]) => {
        self.setState({
          languages: langs.data.languages,
          web: web.data.languages,
          databases: dbs.data.languages,
          deployment: deploy.data.languages
        });
      })
      .catch(console.log);
  }

  navigate({ key }) {
    if (key === 'logout') {
      this.props.logout();
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="menu-title">GT Bits of Good</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['application']}
            style={{ lineHeight: '64px' }}
            onClick={this.navigate}
          >
            <Menu.Item key="application">Application</Menu.Item>
            <Menu.Item key="logout">Logout</Menu.Item>
          </Menu>
        </Header>
        <Content className="content-container">
          <div className="content">
            <Application
              register={this.props.register}
              languages={this.state.languages}
              web={this.state.web}
              databases={this.state.databases}
              deployment={this.state.deployment}
            />
          </div>
        </Content>
        <Footer className="center">
          Made with &#9829; by Bits of Good ©2018
        </Footer>
      </Layout>
    );
  }
}

VisitorDash.propTypes = {
  logout: propTypes.func,
  register: propTypes.func,
  user: propTypes.object
};

function mapStateToProps(state) {
  return { user: state.auth.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorDash);
