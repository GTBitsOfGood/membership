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
const columns = (updateCurrentProject) => [
  {
    title: "Organization",
    dataIndex: "organization",
    render: (text, record ) => <a onClick={() => updateCurrentProject(record._id)}> {text} </a>
  },
  {
    title: "Contact Name",
    dataIndex: "contact.name"
  },
  {
    title: "Contact Phone",
    dataIndex: "contact.phone"
  },
  {
    title: "Contact Email",
    dataIndex: "contact.email"
  },
  {
    title: "Project Manager",
    dataIndex: "project_manager.name"
  },
  {
    title: "Team Members",
    dataIndex: "project_members",
    render: item => <span style={{ textAlign: "center" }}> {item.length} </span>
  }
];
// const columns = [{
//   title: 'Organization',
//   dataIndex: 'organization',
//   render: text => ( <a onClick={() => alert('clicked title')}> {text} </a>),
// },
// {
//   title: 'Contact Name',
//   dataIndex: 'contact.name',
// },
// {
//   title: 'Contact Phone',
//   dataIndex: 'contact.phone',
// },
// {
//   title: 'Contact Email',
//   dataIndex: 'contact.email',
// },
// {
//   title: 'Project Manager',
//   dataIndex: 'project_manager.name',
// },
// {
//   title: 'Team Members',
//   dataIndex: 'project_members',
//   render: item => ( <span style={{textAlign: "center"}} > {
//       item.length
//     } </span>),

// },

// ];

const Projects = ({ data, update}) => (
  <div>
    <h1 className="center">Bits of Good Projects</h1>
    <Table columns = {columns(update)} dataSource = {data} />
  </div>
);

Projects.propTypes = {
  data: propTypes.array,
  update: propTypes.func,

};

export default Projects;


// OLD SHIT


// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
//   render: text => (< a href = "#" > {
//     text
//   } < /a>),
// }, {
//   title: 'Age',
//   dataIndex: 'age',
//   key: 'age',
// }, {
//   title: 'Address',
//   dataIndex: 'address',
//   key: 'address',
// }, {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => ( <
//     span >
//     <
//     a href = "#" > Action 一 {
//       record.name
//     } < /a> <
//     Divider type = "vertical" / >
//     <
//     a href = "#" > Delete < /a> <
//     Divider type = "vertical" / >
//     <
//     a href = "#"
//     className = "ant-dropdown-link" >
//     More actions < Icon type = "down" / >
//     <
//     /a> <
//     /span>
//   ),
// }];


