import React from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";

import "react-table/react-table.css";

const sampleData = [
  {
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
    accessor: d => d.project_members.length
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
      defaultPageSize={5}
      showPageSizeOptions={false}
      showPagination={showPagination(props.data.length)}
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
