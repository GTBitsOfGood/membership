// NPM Imports
import { Row, Col, Card } from 'antd';
import propTypes from 'prop-types';
import React, { Component } from 'react';

class NotFound extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row type="flex" justify="centered">
        <Col span={12} offset={6}>
          <Card title={<span className="font">Application Closed</span>}>
            <h4 className="font center">
              We're sorry, we're no longer accepting applications for Spring
              2018.<br />
              <br />We hope you check back again in the Fall!
            </h4>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default NotFound;
