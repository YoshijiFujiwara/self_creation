import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { TaskType } from './initial-data';

interface StyledDivProps {
  isDragging: boolean;
  isDragDisabled: boolean;
}

// StyledDivPropsで型を指定しないとうまく動かない。なるほどな
// この辺をいちいち指定しないといけないのは、型付言語の悪いところなのかもしれない
const Container = styled.div<StyledDivProps>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white'};

  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

interface TaskProps {
  task: TaskType;
  index: number;
}

export default class Task extends React.Component<TaskProps> {
  public render() {
    const isDragDisabled = this.props.task.id === 'task_1';
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
