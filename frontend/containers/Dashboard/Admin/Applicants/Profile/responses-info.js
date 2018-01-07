import React from "react";
import propTypes from "prop-types";
import { List, Avatar } from "antd";


const ResponsesInfo = ({ data }) => {
  const dataSource = [
    {
      title: "Bits of Good Interest",
      data: data.free_response.bg_interest,
      icon: "question"
    },
    {
      title: "Team Experience",
      data: data.free_response.team_experience,
      icon: "team"
    },
    {
      title: "Project Experience",
      data: data.free_response.project_experience,
      icon: "laptop"
    },
    {
      title: "Other Commitments",
      data: data.free_response.other_commitments,
      icon: "share-alt"
    },
    {
      title: "Project Preference",
      data: data.free_response.project_preference,
      icon: "switcher"
    }
  ];
  return (
    <List
      dataSource={dataSource}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={item.icon} />}
            title={item.title}
            description={<p>{item.data ? item.data : (<i>Not set</i>)}</p>}
          />

        </List.Item>
      )}
    />
  );
};

export default ResponsesInfo;
