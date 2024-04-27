'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompleted, updateTaskTitle } from '@/redux/TaskSlice';
import { RootState } from '@/redux/store';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface FormValues {
  title: string;
}

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleToggleCompleted = (id: string) => {
    dispatch(toggleTaskCompleted(id));
  };

  const handleEditTask = (task: Task) => {
    setEditTaskId(task.id);
    reset({ title: task.title });
  };

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (editTaskId) {
      dispatch(updateTaskTitle({ id: editTaskId, title: data.title }));
      setEditTaskId(null); // Exit edit mode
    }
  };

  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2 shadow">
          {editTaskId === task.id ? (
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 flex-grow">
              <input
                {...register('title', { required: true })}
                className="flex-grow px-2 py-1 rounded border border-gray-300"
                autoFocus
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                Update
              </button>
            </form>
          ) : (
            <>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span
                className={`flex-grow text-lg ${task.completed ? ' text-purple-950 bg-red-200 ' : ''}`}
              >
                {task.title}
              </span>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
              <button
                onClick={() => handleEditTask(task)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
