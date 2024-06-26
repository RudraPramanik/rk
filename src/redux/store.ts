'use client'
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice';

// Function to load the state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;  //if No stored state found
    }
    return { tasks: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;  // Handle errors like JSON parsing error
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: persistedState,  // Use loaded state as initial state
});

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
