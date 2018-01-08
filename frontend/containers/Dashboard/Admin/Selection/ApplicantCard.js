// NPM Imports
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Card } from 'antd';
import { Draggable } from 'react-beautiful-dnd';

// Local Imports

class ApplicantCard extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}

  render() {
    return (
      <Draggable draggableId={this.props.data._id}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              style={provided.draggableStyle}
              className="applicant-card"
              {...provided.dragHandleProps}
            >
              <Card title={`45 -- ${this.props.data.name}`}>
                <p>Databases: MySQL, MongoDB, SQLite</p>
                <p>Databases: MySQL, MongoDB, SQLite</p>
                <p>Databases: MySQL, MongoDB, SQLite</p>
              </Card>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

ApplicantCard.propTypes = {
  data: propTypes.object
};

export default ApplicantCard;
