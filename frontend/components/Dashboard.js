// NPM Packages
import React, { Component } from 'react';
import { Jumbotron, Col, Panel } from 'react-bootstrap';
import GitHubLogin from 'react-github-login';
// import axios from 'axios';
// Local Imports
// import SplashInfo from '../components/SplashInfo';
// import SplashAuth from '../components/SplashAuth';

import axios from 'axios';
const test = () => {

};
// Home component
class Dashboard extends Component {

  render() {
    return (
      <div>
        <Jumbotron style={{ backgroundColor: '#deffcf' }}>
          <div style={{ paddingLeft: '25px' }}>
            <h1>Dashboard</h1>
            <p>From here can apply to join and check your applicantion status.</p>
          </div>
        </Jumbotron>
        <Col md={7}>
          {/* <SplashInfo /> */}
          {/* Add this for insta feed http://instafeedjs.com/ */}

        </Col>
        <Col md={5}>
          {/* <GitHubLogin clientId="9c7b70b50167209f4da0"
        onSuccess={onSuccess}
        onFailure={onFailure} /> */}
          {/* <SplashAuth /> */}
          <a href={"/api/auth/github"}>Click to login</a>
          <button onClick={test}>Click me to check login</button>
        </Col>
      </div>
    );
  }
}


export default Dashboard;