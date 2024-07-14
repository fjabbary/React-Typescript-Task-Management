// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { tasks } from './data.ts'
import { TaskState } from '../interface/Task.ts';



const initialState: TaskState = {
  tasks: [...tasks]
};


export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },

    updateTask: (state, action) => {
      const idx = state.tasks.findIndex(task => task.id === action.payload.id)
      state.tasks[idx] = action.payload
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload)
    }
  },
});








export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
