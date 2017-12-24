// NPM Packages
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Menu } from 'antd';

// Local Imports

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
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[selectedKeys]}>
          <Menu.Item key="home" selected style={{paddingTop: '10px', paddingBottom: '10px'}}>GT Bits of Good</Menu.Item>
        </Menu>
    );
  }
}

NavBar.propTypes = {
  logoutAction: PropTypes.func
};

export default NavBar;