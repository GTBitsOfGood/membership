import React from 'react';
import propTypes from 'prop-types';
import { List, Avatar } from "antd";


const BasicInfo = ({data}) => {
  const dataSource = [
    {
      title: "Contact Info",
      data: [
        {
          label: 'Phone',
          value: data.phone
        },
        {
          label: 'Email',
          value: data.email
        }
      ],
      icon: "idcard"
    },
    {
      title: "Buzzport",
      data: [
        {
          label: 'Credit Hours',
          value: data.credit_hours 
        },
        {
          label: 'Graduation',
          value: data.expected_graduation
        }
      ],
      icon: "book"
    },
    {
      title: "Github Stats",
      data: [
        {
          label: 'Public Repos',
          value: data.github_public_repos
        },
        {
          label: 'Followers',
          value: data.github_followers
        }
      ],
      icon: "github"
    }
  ];
  return (
  <List
    itemLayout="vertical"
    dataSource={dataSource}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar icon={item.icon} />
          }
          title={<a href="https://ant.design">{item.title}</a>}
        />
        {item.data.map(e => {
          if (e.value) {
            return (<p key={e.label}><b>{e.label}</b>: {e.value}</p>)
          } else {
            return (<p key={e.label}><b>{e.label}</b>: <i>Not Set</i></p>) 
          }
        })}
      </List.Item>
    )}
  />
  )
;
};

export default BasicInfo;


