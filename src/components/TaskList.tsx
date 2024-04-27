'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompleted } from '@/redux/TaskSlice';
import { RootState } from '@/redux/store';
import Link from 'next/link';
// import { removeTask, toggleTaskCompleted } from '../redux/taskSlice';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}


const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks); 
  console.log('Tasks from Redux:', tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleToggleCompleted = (id: string) => {
    dispatch(toggleTaskCompleted(id)); // Dispatch correct action
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompleted(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
    
  );
};

export default TaskList;
