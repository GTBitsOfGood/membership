// NPM Packages
import React from 'react';
import {Row, Col, Card, Button} from 'antd';

// Home component
const Splash = () => (
  <div>
    <Row type="flex" justify="centered">
      <Col span={12} offset={6}>
        <Card className="font" title="Application Pending">
          <p className="font">
            Thank you so much for applying to join a Bits of Good Project Team!
            We look forward to reviewing your application and will get back to
            you by January XXXX to let you know about project placement!
          </p>
        </Card>
      </Col>
    </Row>
  </div>
);


export default Splash;