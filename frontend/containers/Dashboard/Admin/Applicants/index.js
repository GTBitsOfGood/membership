import React, { Component } from "react";
import Fuse from "fuse.js";
import propTypes from "prop-types";
import {
  Icon,
  Button,
  Avatar,
  Table,
  Divider
} from 'antd';


import "react-table/react-table.css";
import { applicantColumns } from './columns';
import SearchBar from './SearchBar';


class Applicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.data.slice(),
    };

    this.fuseOptions = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "phone",
        "github.username",
        "credit_hours",
        "score",
        "email"
      ]
    };
    this.fuse = new Fuse(this.props.data, this.fuseOptions);
    this.fuzzySearch = this.fuzzySearch.bind(this);
  }

  componentWillReceiveProps(props) {
    this.fuse = new Fuse(props.data, this.fuseOptions);
    this.setState({ dataList: props.data });
  }

  fuzzySearch(search) {
    if (search === "") {
      this.setState({ dataList: this.props.data });
    } else {
      const result = this.fuse.search(search);
      this.setState({ dataList: result });
    }
  }

  render() {
    return (
      <div className="center">
        <h1 className="center">Bits of Good Applicants</h1>
        <SearchBar fuzzy={this.fuzzySearch} style={{ paddingBottom: "20px" }} />
        <Table
          columns={applicantColumns(this.props.update)}
          dataSource={this.state.dataList}
          rowKey={record => record._id}
        />
      </div>
    );
  }
}
Applicants.propTypes = {
  data: propTypes.array,
  update: propTypes.func,

};

export default Applicants;
