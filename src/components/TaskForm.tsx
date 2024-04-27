'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/TaskSlice'; 

interface TaskFormProps {
  onAddTask: (title: string) => void;
}
interface FormValues{
    title: string
}
const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    // Initialize useForm hook
  const { register, handleSubmit, reset } = useForm<FormValues>(); 
  const dispatch = useDispatch();

  const onSubmit = ({ title }: { title: string }) => {
    if (title.trim()) {
      dispatch(addTask({ id: Date.now().toString(), title, completed: false })); 
      reset(); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('title', { required: true })} 
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
