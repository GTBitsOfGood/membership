import React, { Component } from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";
import { Icon, Card, Row, Col} from "antd";


import "react-table/react-table.css";
import NotFound from '../../../../components/NotFound';

const tabTitles = [
  {
    key: "description",
    tab: "Description"
  },
  {
    key: "team",
    tab: "Project Team"
  }
];

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Github",
    accessor: "github_username"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone",
    accessor: "phone"
  }
];


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleKey: "description"
    };


    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(titleKey) {
    this.setState({ titleKey });
  }

  render() {
    return !this.props.data ? <NotFound /> : <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card cover={<img alt="example" src={this.props.data.photo_url} />} actions={[<Icon type="edit" onClick={() => alert("clicked")} />, <Icon type="delete" />]}>
              <Card.Meta title={this.props.data.organization} description={<a target="_blank" href={this.props.data.website_url}>
                    {this.props.data.website_url}
                  </a>} />
            </Card>
          </Col>
          <Col span={16}>
            <Card style={{ width: "100%" }} tabList={tabTitles} onTabChange={key => this.onTabChange(key)}>
              {this.state.titleKey === "description" &&
                <p className="font">
                  {this.props.data.description}
                </p>
              }
              {this.state.titleKey === "team" &&
                <ReactTable data={this.props.data.project_members} columns={columns} defaultPageSize={7}
                  showPageSizeOptions={false}
                  showPagination={false}
                  className="-striped -highlight"
  // getTdProps={(state, rowInfo, column, instance) => {
  //   return {
  //     onClick: e => update(rowInfo.original._id)
  //   };
  // }}
                />
              }
            </Card>
          </Col>
        </Row>
      </div>;
  }
}


Profile.propTypes = {
  data: propTypes.object,
  match: propTypes.object,
};

export default Profile;

