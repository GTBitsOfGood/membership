import React from "react";
export const projectColumns = (updateCurrentProject) => [
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