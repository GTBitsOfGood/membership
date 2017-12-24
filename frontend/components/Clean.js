// NPM Packages
import React from "react";
import { Button } from "antd";

import logo from '../assets/official_logo.png';

const Clean = () => (
  <div className="box">
    <img src={logo} className="logo"/>
    <div className="login-button">
      <Button type="primary" size="large" icon="github" >
        Login to Membership Portal with Github
      </Button>
    </div>
  </div>
);


export default Clean;
