import React from "react";
import { Link } from 'react-router-dom';
export const applicantColumns = (updateCurrentProject) => [
  {
    title: "Name",
    dataIndex: "name",
    // render: (text, record) => <Link to={`/applicants/${record._id}`}>{text}</Link>
    render: (text, record ) => <a onClick={() => updateCurrentProject(record._id)}> {text} </a>
  },
  {
    title: "Github",
    dataIndex: "github_username",
    render: (text, record ) => <a target="_blank" href={record.github_profile_url}> {text} </a>
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
  },
];

export const teamColumns = () => [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record ) => <a> {text} </a>
  },
  {
    title: "Github Username",
    dataIndex: "github_username"
  },
  {
    title: "Phone Number",
    dataIndex: "phone"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
];