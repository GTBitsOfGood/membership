import React from 'react';
import propTypes from 'prop-types';
import { List, Avatar } from "antd";


const BasicInfo = ({data}) => {
  const dataSource = [
    {
      title: "Contact Info",
      data: `Phone: ${data.phone} | Email: ${data.email}`,
      icon: "idcard"
    },
    {
      title: "Buzzport",
      data: `Credit hours: ${data.credit_hours} | Graduation: ${data.expected_graduation}`,
      icon: "book"
    },
    {
      title: "Github Stats",
      data: `Public Repos: ${data.github_public_repos} | Followers: ${data.github_followers}`,
      icon: "github"
    },
  ];
  return (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar icon={item.icon} />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.data}
        />
      </List.Item>
    )}
  />
  )
;
};

export default BasicInfo;


