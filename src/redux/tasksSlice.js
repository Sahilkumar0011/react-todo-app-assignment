import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [], // Store tasks
    selectedPriority: null, // Store currently selected priority for the sidebar
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updatePriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.priority = priority;
      }
    },
    setSelectedPriority: (state, action) => {
      state.selectedPriority = action.payload; // Set the selected priority
    },
  },
});

export const { addTask, deleteTask, updatePriority, setSelectedPriority } = tasksSlice.actions;

export default tasksSlice.reducer;
