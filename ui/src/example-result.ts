export interface ResultType {
  draggableId: string;
  type: string;
  reason: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  } | null;
}

const result: ResultType = {
  draggableId: 'task_1',
  type: 'TYPE',
  reason: 'DROP',
  source: {
    droppableId: 'column_1',
    index: 0,
  },
  destination: null,
};

export default result;
