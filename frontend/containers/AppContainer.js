import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

import Splash from './Splash';

import Navbar from '../components/Navbar';
import Clean from '../components/Clean';
import MemberDash from "./MemberDash";
import Application from "../components/Application";
import MainContainer from './MainContainer';
import PrivateRoute from '../components/PrivateRoute';

import * as actions from '../actions/auth';

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;


// const AppContainer = ({ logout }) => {
//   return (
//     <Clean/>);
//     // <Layout className="layout">
//     //   <Header>
//     //     <Navbar />
//     //   </Header>
//     //   <Content style={{ padding: "0 50px" }}>
//     //     <div style={{ background: "#fff", padding: 24, }}>
//     //       <Application />
//     //     </div>
//     //   </Content>
//     //   <Footer style={{ textAlign: "center" }}>
//     //     Ant Design ©2016 Created by Ant UED
//     //   </Footer>
//     // </Layout>);
//   // const {Header, Content, Footer} = Layout;
//   // return (
//   //   <Layout>
//   //     <Header>
//   //       <Navbar logoutAction={ logout } />
//   //     </Header>
//   //     <Content style={{padding: '0 50px'}}>
//   //       <Splash />
//   //     </Content>
//   //   </Layout>

//   // );
// };
// const AppContainer = ({ logout, status }) => {

// import * as actions from '../actions/auth';

class AppContainer extends Component {
  componentWillMount() {
    console.log('about to authenticate');
    this.props.authenticate();
  }
  componentWillUpdate(nextProps) {

  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Clean} />
        <PrivateRoute path="/" authenticated={this.props.status} component={MainContainer} />
      </Switch>
    );
  }

}

AppContainer.propTypes = {
  logout: PropTypes.func,
  status: PropTypes.bool,
  authenticate: PropTypes.func
};

function mapStateToProps(state) {
  return {
    status: !!state.auth.user,

  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(actions, dispatch);
  return {
    authenticate: () => dispatch(actions.login()),
    logout: () => dispatch(actions.logout()),
  };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer));
