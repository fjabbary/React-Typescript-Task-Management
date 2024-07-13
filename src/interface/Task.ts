export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  email: string;
}

export interface TaskState {
  tasks: Task[];
}
