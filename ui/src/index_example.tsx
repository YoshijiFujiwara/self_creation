import '@atlaskit/css-reset';
import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Column from './Column';
import initialData, { ColumnType, InitialDataType, TasksType } from './initial-data';

const Container = styled.div`
  display: flex;
`;

interface AppStateType extends InitialDataType {
  homeIndex: number | null;
}

interface InnerListProps {
  column: ColumnType;
  taskMap: TasksType;
  index: number;
}

class InnerList extends React.Component<InnerListProps> {
  public shouldComponentUpdate(nextProps: InnerListProps) {
    if (
      nextProps.column === this.props.column &&
      nextProps.taskMap === this.props.taskMap &&
      nextProps.index === this.props.index
    ) {
      return true;
    }
    return false;
  }

  public render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId: string) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

// tslint:disable-next-line:max-classes-per-file
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

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrders);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrders: newColumnOrder,
      };
      this.setState(newState);
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
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.columnOrders.map((columnId, index) => {
                const column = this.state.columns[columnId];
                // const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                // const isDropDisabled =
                //   this.state.homeIndex !== null && index < this.state.homeIndex; // 今の位置より右にしかいけないようにする

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    // tasks={tasks}
                    // isDropDisabled={isDropDisabled}
                    index={index}
                  />
                );
              })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
