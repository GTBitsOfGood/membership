import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'antd';

import * as actions from '../../../../ducks/admin';
import { projectColumns } from './columns';

const Projects = ({ data, updateCurrentProject, total, loadMoreProjects }) => (
  <div>
    <h1 className="center">Projects</h1>
    <Table
      pagination={{ total }}
      columns={projectColumns(updateCurrentProject)}
      dataSource={data}
      rowKey={record => record._id}
      loading={!data.length}
      onChange={i => loadMoreProjects(i.current)}
    />
  </div>
);

Projects.propTypes = {
  data: propTypes.array,
  total: propTypes.number,
  updateCurrentProject: propTypes.func,
  loadMoreProjects: propTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.admin.projects,
    total: state.admin.projectCount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
