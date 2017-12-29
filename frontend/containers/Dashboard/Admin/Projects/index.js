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
import {projectColumns} from './columns';

const Projects = ({ data, update }) => (
  <div>
    <h1 className="center">Bits of Good Projects</h1>
    <Table columns={projectColumns(update)} dataSource={data} rowKey={(record) => record._id} />
  </div>
);

Projects.propTypes = {
  data: propTypes.array,
  update: propTypes.func,

};

export default Projects;


