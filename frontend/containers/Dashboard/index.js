// NPM Imports
import React from "react";
import PropTypes from "prop-types";

// Local Imports
import Admin from './Admin';
import Member from './Member';
import Rejected from './Rejected';
import Visitor from './Visitor';
import Submitted from './Submitted';

const Dashboard = ({ user, ...rest }) => {
  if (user.role === "admin") {
    return <Admin user={user} {...rest} />;
  }

  switch (user.application_status) {
    case "submitted":
      return <Submitted user={user} {...rest} />;
    case "accepted":
      return <Member user={user} {...rest} />;
    case "rejected":
      return <Rejected user={user} {...rest} />;
    default:
      // return <Visitor user={user} {...rest} />;
      return <Rejected user={user} {...rest} />;
  }
};

Dashboard.propTypes = {
  user: PropTypes.object
};

export default Dashboard;
