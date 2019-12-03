export interface ColumnType {
  id: string;
  taskIds: string[];
  title: string;
}

export interface ColumnsType {
  [key: string]: ColumnType;
}

export interface TaskType {
  id: string;
  content: string;
}

export interface TasksType {
  [key: string]: TaskType;
}

export interface InitialDataType {
  tasks: TasksType;
  columns: ColumnsType;
  columnOrders: string[];
}

const initialData: InitialDataType = {
  tasks: {
    task_1: { id: 'task_1', content: 'taks out the garbage' },
    task_2: { id: 'task_2', content: 'watch my favorite show' },
    task_3: { id: 'task_3', content: 'Charge my phone' },
    task_4: { id: 'task_4', content: 'Cook dinner' },
  },
  // tslint:disable-next-line:object-literal-sort-keys
  columns: {
    column_1: {
      id: 'column_1',
      taskIds: ['task_1', 'task_2', 'task_3', 'task_4'],
      title: 'to-do',
    },
    column_2: {
      id: 'column_2',
      title: 'In progress',
      taskIds: [],
    },
    column_3: {
      id: 'column_3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrders: ['column_1', 'column_2', 'column_3'],
};

export default initialData;
