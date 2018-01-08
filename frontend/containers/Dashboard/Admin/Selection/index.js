// NPM Imports
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { DragDropContext } from 'react-beautiful-dnd';

// Local Imports
import Column from './Column';
import { projectData } from './sample-data';

class Selection extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  onDragStart(initial) {
    // this is where I should disable updates via sockets or something...
    // console.log("drag start===================>");
    // console.log(initial);
    // console.log("^^INITIAL=========");
  }
  onDragEnd(result) {
    console.log('~~~~~~~~~~~~Result');
    console.log(result);
    console.log('====================>Drag End');
  }

  render() {
    return (
      <div>
        {/* <h1 className="center">Member Selection</h1> */}
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <div id="board">
            {projectData.map(project => (
              <Column
                key={project.organization}
                title={project.organization}
                cards={project.project_members}
              />
            ))}
          </div>
        </DragDropContext>
      </div>
    );
  }
}

Selection.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
