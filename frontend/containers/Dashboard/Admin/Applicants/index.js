import React from "react";
import propTypes from "prop-types";
import {
  Icon,
  Button,
  Avatar,
  Table,
  Divider
} from 'antd';


import "react-table/react-table.css";
import {applicantColumns} from './columns';

const Applicants = ({ data, update }) => (
  <div>
    <h1 className="center">Bits of Good Applicants</h1>
    <Table
      columns={applicantColumns(update)}
      dataSource={data}
      rowKey={record => record._id}
    />
  </div>
);

Applicants.propTypes = {
  data: propTypes.array,
  update: propTypes.func,

};

export default Applicants;
