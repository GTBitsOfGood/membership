// NPM Imports
import { Row, Col, Card } from "antd";
import propTypes from "prop-types";
import React, { Component } from "react";
import ReactLoading from 'react-loading';

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      timer: null
    };

    this.stopLoading = this.stopLoading.bind(this);
  }

  componentWillMount() {
    const timer = setTimeout(this.stopLoading, 3000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  stopLoading() {
    this.setState({ loading: false });
  }


  render() {
    return (
      <Row type="flex" justify="centered">
        {
          this.state.loading
            ? (<Col offset={12} style={{ paddingTop: '150px' }} >
              <ReactLoading type={"spin"} color={"#3a85ff"} delay={0} />
            </Col>)
            : (
              <Col span={12} offset={6}><Card title={<span className="font">Something Went Wrong</span>}>
                <h4 className="font center">
                  Silly monkey stole the page you're looking for
                </h4>
                <div className="img-box">
                  <img className="img-center"
                    src="http://www.madmonkeyhostels.com/wp-content/uploads/2017/05/Placeholder-Image-400x250.jpg?04e750"
                  />
                </div>
              </Card>
              </Col>)
        })


    </Row>);
    // return this.state.loading
    //   ? (<ReactLoading type={"spin"} color={"#3a85ff"} />)
    //   : (<Row type="flex" justify="centered">
    //     <Col span={12} offset={6}>
    //       <Card title={<span className="font">Something Went Wrong</span>}>
    //         <h4 className="font center">
    //           Silly monkey stole the page you're looking for
    //     </h4>
    //         <div className="img-box">
    //           <img
    //             className="img-center"
    //             src="http://www.madmonkeyhostels.com/wp-content/uploads/2017/05/Placeholder-Image-400x250.jpg?04e750"
    //           />
    //         </div>
    //       </Card>
    //     </Col>
    //   </Row>);
  }
}

export default NotFound;
