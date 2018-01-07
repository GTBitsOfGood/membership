// NPM Packages
import React from "react";
import { Button } from "antd";

import logo from "../assets/official_logo.png";

const Clean = () => (
  <div className="box">
    <img src={logo} className="logo" />
    <div className="login-button">
      <h4 className="center">Want to join Bits of Good?</h4>
      <Button type="primary" size="large" icon="github" href="/api/auth/github">
        Login to Membership Portal with Github
      </Button>
    </div>
  </div>
);

export default Clean;
