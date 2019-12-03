import '@atlaskit/css-reset';
import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Column from './Column';
import initialData, { InitialDataType } from './initial-data';

const Container = styled.div`
  display: flex;
`;

interface AppStateType extends InitialDataType {
  homeIndex: number | null;
}

class App extends React.Component {
  public state: AppStateType = { ...initialData, homeIndex: null };

  // public onDragStart = () => {
  //   document.body.style.color = 'orange';
  //   document.body.style.transition = 'background-color 0.2s ease'; // 緩やかに変化させる！
  // };

  // public onDragUpdate = (update: DropResult) => {
  //   const { destination } = update;
  //   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  // };

  public onDragStart = (start: DropResult) => {
    const homeIndex = this.state.columnOrders.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  public onDragEnd = (result: DropResult) => {
    // document.body.style.color = 'inherit'; // 親要素のプロパティを継承する

    this.setState({
      homeIndex: null,
    });

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1); // source.index から取り除く
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
    return;
  };

  public render() {
    return (
      <DragDropContext
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrders.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            const isDropDisabled = this.state.homeIndex !== null && index < this.state.homeIndex; // 今の位置より右にしかいけないようにする

            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                isDropDisabled={isDropDisabled}
              />
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
