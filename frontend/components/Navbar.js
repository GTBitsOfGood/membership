// NPM Packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
  }

  render() {
    const {selectedKeys} = this.state;
    return (
      <div>
        <div className="logo" style={{color: "white", width: "120px", height: "31px", float: "left" }} >GT Bits of Good</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="home">Home</Menu.Item>
          {/* <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
      </div>

    );
  }
}

NavBar.propTypes = {
  logoutAction: PropTypes.func
};

export default NavBar;