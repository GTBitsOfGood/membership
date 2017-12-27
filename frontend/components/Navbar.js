// NPM Packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

// Local Imports

// state = {
//   current: "mail"
// };
// handleClick = e => {
//   console.log("click ", e);
//   this.setState({
//     current: e.key
//   });
// };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ''
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate({ key }) {
    console.log('inside navigate', key);
    if (key === "logout") {
      this.props.logout();
    }
  }

  render() {
    const {selectedKeys} = this.state;
    return (<div>
        <div className="logo" style={{ color: "white", width: "120px", height: "31px", float: "left" }}>
          GT Bits of Good
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} style={{ lineHeight: "64px" }} onClick={this.navigate}>
          <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="test"><Link to="/application">Application</Link></Menu.Item>
          <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      </div>);
  }
}

NavBar.propTypes = {
  logout: PropTypes.func
};

export default NavBar;