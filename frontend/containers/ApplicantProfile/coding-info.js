import React from 'react';
import propTypes from 'prop-types';
import { List, Avatar } from 'antd';

const CodingInfo = ({ data }) => {
  const dataSource = [
    {
      title: 'Programming Languages',
      data: data.languages.map(item => item.name).join(', '),
      icon: 'code-o'
    },
    {
      title: 'Web Technology',
      data: data.web_technologies.map(item => item.name).join(', '),
      icon: 'desktop'
    },
    {
      title: 'Databases',
      data: data.databases.map(item => item.name).join(', '),
      icon: 'database'
    },
    {
      title: 'Deployment Technology',
      data: data.deployment.map(item => item.name).join(', '),
      icon: 'cloud-upload-o'
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

CodingInfo.propTypes = {
  data: propTypes.object
};

export default CodingInfo;
