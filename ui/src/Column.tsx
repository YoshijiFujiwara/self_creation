import React, { Props } from 'react';
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ColumnType, TaskType } from './initial-data';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  padding: 8px;
`;
interface StyledDivProps {
  isDraggingOver: boolean;
}
const TaskList = styled.div<StyledDivProps>`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
  //   isDropDisabled: boolean;
  index: number;
}

class InnerList extends React.PureComponent<{ tasks: TaskType[] }> {
  public shouldComponentUpdate(nextProps: { tasks: TaskType[] }) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  public render() {
    return this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />);
  }
}

// tslint:disable-next-line:max-classes-per-file
export default class Column extends React.Component<ColumnProps> {
  public render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              type="task"
            >
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
