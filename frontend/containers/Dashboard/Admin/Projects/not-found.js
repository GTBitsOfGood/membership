// NPM Imports
import {  Row, Col, Card  } from "antd";
import propTypes from "prop-types";
import React from "react";

const NotFound = () => (
  <Row type="flex" justify="centered">
    <Col span={12} offset={6}>
      <Card title={<span className="font">Something Went Wrong</span>}>
        <h4 className="font center">
          These monkeys stole the page you're looking for
        </h4>
        <div className="img-box">
          <img className="img-center" src="http://www.madmonkeyhostels.com/wp-content/uploads/2017/05/Placeholder-Image-400x250.jpg?04e750" />
        </div>
      </Card>
    </Col>
  </Row>
);


export default NotFound;
