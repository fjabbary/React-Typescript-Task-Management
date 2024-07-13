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

  },
});








// export const { _ } = taskSlice.actions;
export default taskSlice.reducer;
