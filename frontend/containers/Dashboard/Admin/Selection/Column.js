// NPM Imports
import { Card } from 'antd';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

// Local Imports
import ApplicantCard from './ApplicantCard';

class Column extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}

  render() {
    return (
      <div>
        <Card title={this.props.title}>
          <div>
            <Droppable droppableId={this.props.title}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className="column"
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey'
                  }}
                >
                  {this.props.cards.map(applicant => (
                    <ApplicantCard key={applicant._id} data={applicant} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </Card>
      </div>
    );
  }
}

Column.propTypes = {
  title: propTypes.string,
  cards: propTypes.array
};

export default Column;
