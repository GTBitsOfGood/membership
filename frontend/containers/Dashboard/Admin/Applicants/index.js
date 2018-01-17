import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Col, Row, Card } from 'antd';

import * as actions from '../../../../ducks/admin';
import { applicantColumns } from './columns';

const Applicants = ({
  data,
  updateCurrentApplicant,
  total,
  loading,
  loadMoreApplicants,
  sortApplicantsByScore,
  loadApplicants,
  filterPMs,
  filterEMs
}) => (
  <div>
    <h1 className="center">Applicants</h1>
    <Row gutter={16}>
      <Col span={20}>
        <Table
          pagination={{ total }}
          columns={applicantColumns(updateCurrentApplicant)}
          dataSource={data}
          rowKey={record => record._id}
          loading={loading}
          onChange={i => loadMoreApplicants(i.current)}
        />
      </Col>
      <Col span={4}>
        <Card title="Table Controls">
          <a onClick={sortApplicantsByScore}> Sort by Score</a>
          <br />
          <a onClick={filterPMs}> Filter PM Interest</a>
          <br />
          <a onClick={filterEMs}> Filter EM Interest</a>
          <br />
          <br />
          <a onClick={loadApplicants}> Reset</a>
        </Card>
      </Col>
    </Row>
  </div>
);

Applicants.propTypes = {
  data: propTypes.array,
  total: propTypes.number,
  updateCurrentApplicant: propTypes.func,
  loadMoreApplicants: propTypes.func,
  sortApplicantsByScore: propTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.admin.applicants,
    total: state.admin.applicantCount,
    loading: !(state.admin.applicants && state.admin.applicants.length)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);
