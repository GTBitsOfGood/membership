import React from 'react';
import propTypes from 'prop-types';
import { List, Avatar } from 'antd';

const BasicInfo = ({ data }) => {
  const dataSource = [
    {
      title: 'Contact Info',
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
      icon: 'idcard'
    },
    {
      title: 'Buzzport',
      data: [
        {
          label: 'Credit Hours',
          value: data.credit_hours
        },
        {
          label: 'Graduation',
          value: data.graduation_date
        }
      ],
      icon: 'book'
    },
    {
      title: 'Github Stats',
      data: [
        {
          label: 'Public Repos',
          value: data.github.public_repos
        },
        {
          label: 'Followers',
          value: data.github.followers
        }
      ],
      icon: 'github'
    },
    {
      title: 'Leadership Interest',
      data: [
        {
          label: 'Project Manager',
          value: `${data.pm_interest ? 'Yes' : 'No'}`
        },
        {
          label: 'Engineering Manager Interest',
          value: `${data.em_interest ? 'Yes' : 'No'}`
        }
      ],
      icon: 'coffee'
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
            description={item.data.map(e => {
              if (e.value) {
                return (
                  <p key={e.label}>
                    <b>{e.label}</b>: {e.value}
                  </p>
                );
              }
              return (
                <p key={e.label}>
                  <b>{e.label}</b>: <i>Not Set</i>
                </p>
              );
            })}
          />
        </List.Item>
      )}
    />
  );
};

export default BasicInfo;
