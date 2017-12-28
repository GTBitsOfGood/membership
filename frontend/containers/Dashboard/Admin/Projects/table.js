import React from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";
import { Icon, Button } from 'antd';

import "react-table/react-table.css";

const sampleData = [
  {
    _id: "123",
    organization: "Nonprofit 1",
    contact: {
      name: "Contact Name 1",
      phone: "Contact Phone 1",
      email: "Contact Email 1"
    },
    project_manager: {
      name: "Project Manager 1"
    },
    project_members: [
      "Project 1 Member",
      "Project 1 Member",
      "Project 1 Member"
    ]
  },
  {
    _id: "456",
    organization: "Nonprofit 2",
    contact: {
      name: "Contact Name 2",
      phone: "Contact Phone 2",
      email: "Contact Email 2"
    },
    project_manager: {
      name: "Project Manager 2"
    },
    project_members: [
      "Project 2 Member",
      "Project 2 Member",
      "Project 2 Member"
    ]
  }
];

const columns = [
  {
    Header: "Organization",
    accessor: "organization"
  },
  {
    Header: "Contact Name",
    accessor: "contact.name"
  },
  {
    Header: "Contact Phone",
    accessor: "contact.phone"
  },
  {
    Header: "Contact Email",
    accessor: "contact.email"
  },
  {
    Header: "Project Manager",
    accessor: "project_manager.name"
  },
  {
    Header: "Team Members",
    id: "project_members",
    accessor: d => d.project_members.length
  },
  {
    Header: "Actions",
    accessor: "_id",
    Cell: inputs => (
      <span>
        <Button icon="edit">Edit</Button>
        <Button icon="delete" type="danger" style={{ backgroundColor: "#fff" }}>
          Delete
        </Button>
      </span>
    )
  }
];

function showPagination(size) {
  return size > 10;
}
const Projects = props => (
  <div>
    <ReactTable
      data={sampleData}
      columns={columns}
      defaultPageSize={10}
      showPageSizeOptions={false}
      showPagination={showPagination(sampleData.length)}
      className="-striped -highlight"
      // getTdProps={(state, rowInfo, column, instance) => {
      //   return {
      //     onClick: e => props.updateEvent(rowInfo.original._id)
      //   };
      // }}
    />
  </div>
);

Projects.propTypes = {
  data: propTypes.array
};

export default Projects;
