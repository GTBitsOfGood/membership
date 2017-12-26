// NPM Packages
import React from 'react';
import {Row, Col, Card, Button} from 'antd';

// Home component
const Splash = () => (
  <div>
    <Row type="flex" justify="centered">
      <Col span={12} offset={6}>
        <Card title="Apply Now!">
          <Button type="primary" size="large">Sign in with GitHub</Button>
        </Card>
      </Col>
    </Row>
  </div>
);


export default Splash;