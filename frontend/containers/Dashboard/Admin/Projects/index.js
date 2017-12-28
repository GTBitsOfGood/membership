import React from "react";
import propTypes from "prop-types";
import ReactTable from "react-table";
import { Icon, Button, Avatar} from 'antd';

import "react-table/react-table.css";

const columns = [
  {
    Header: "Organization",
    accessor: "organization",
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
  }
];

function pagination(data) {
  return data.length > 10;
}
const Table = ({ data, update}) => (
  <div>
    <h1 className="center">Bits of Good Projects</h1>
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      showPageSizeOptions={false}
      showPagination={pagination(data)}
      className="-striped -highlight"
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: e => update(rowInfo.original._id)
        };
      }}
    />
  </div>
);

Table.propTypes = {
  dataSet: propTypes.array,
  update: propTypes.func,

};

export default Table;
