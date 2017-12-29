import React from "react";
import propTypes from "prop-types";
import { List, Avatar } from "antd";


const ResponsesInfo = ({ data }) => {
  const dataSource = [
    {
      title: "Bits of Good Interest",
      data: data.bg_interest,
      icon: "question"
    },
    {
      title: "Team Experience",
      data: data.team_experience,
      icon: "team"
    },
    {
      title: "Project Experience",
      data: data.project_experience,
      icon: "laptop"
    },
    {
      title: "Other Commitments",
      data: data.other_commitments,
      icon: "share-alt"
    },
    {
      title: "Project Preference",
      data: data.project_preference,
      icon: "switcher"
    }
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={item.icon} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.data}
          />
        </List.Item>
      )}
    />
  );
};

export default ResponsesInfo;
