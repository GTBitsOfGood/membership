import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table } from "antd";

import * as actions from "../../../../ducks/admin";
import { applicantColumns } from "./columns";

const Applicants = ({
  data,
  updateCurrentApplicant,
  total,
  loadMoreApplicants
}) => (
  <div>
    <h1 className="center">Applicants</h1>
    <Table
      pagination={{ total }}
      columns={applicantColumns(updateCurrentApplicant)}
      dataSource={data}
      rowKey={record => record._id}
      loading={!data.length}
      onChange={i => loadMoreApplicants(i.current)}
    />
  </div>
);

Applicants.propTypes = {
  data: propTypes.array,
  total: propTypes.number,
  updateCurrentApplicant: propTypes.func,
  loadMoreApplicants: propTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.admin.applicants,
    total: state.admin.applicantCount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);
