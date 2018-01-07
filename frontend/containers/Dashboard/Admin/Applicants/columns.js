import React from "react";
import { Link } from "react-router-dom";
export const applicantColumns = updateCurrentProject => [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => (
      <a onClick={() => updateCurrentProject(record._id)}> {text} </a>
    )
  },
  {
    title: "Github",
    dataIndex: "github.username",
    render: (text, record) => (
      <a target="_blank" href={record.github.profile_url}>
        {" "}
        {text}{" "}
      </a>
    )
  },
  {
    title: "Phone",
    dataIndex: "phone"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Credit Hours",
    dataIndex: "credit_hours"
  },
  {
    title: "Score",
    dataIndex: "score"
  }
];

export const applicantDashColumns = updateCurrentProject => [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => (
      <a onClick={() => updateCurrentProject(record._id)}> {text} </a>
    )
  },
  {
    title: "Github",
    dataIndex: "github.username",
    render: (text, record) => (
      <a target="_blank" href={record.github.profile_url}>
        {" "}
        {text}{" "}
      </a>
    )
  },
  {
    title: "Phone",
    dataIndex: "phone"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Score",
    dataIndex: "score"
  }
];

export const teamColumns = () => [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => <a> {text} </a>
  },
  {
    title: "Github Username",
    dataIndex: "github.username"
  },
  {
    title: "Phone Number",
    dataIndex: "phone"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];
