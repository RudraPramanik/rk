'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompleted } from '@/app/redux/TaskSlice';
import { RootState } from '@/app/redux/store';
// import { removeTask, toggleTaskCompleted } from '../redux/taskSlice';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks); // Use typed state
  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleToggleCompleted = (id: string) => {
    dispatch(toggleTaskCompleted(id)); // Dispatch correct action
  };

  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompleted(task.id)} // Bind ID
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
