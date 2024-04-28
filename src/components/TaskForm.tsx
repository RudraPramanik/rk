'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/TaskSlice'; 
import Container from './ui/Container';
import Text from './ui/Text';

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
    <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10">
            <Text variant='headingMd' fontWeight='semibold' >Add your task</Text>
            <input
        {...register('title', { required: true })}
        type="text"
        placeholder="Add a new task"
        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className=" max-w-32 my-4 mx-auto flex px-4 py-2 font-bold text-white bg-[#321857] rounded hover:bg-[#110a1c] focus:outline-none focus:shadow-outline"
      >
        Add Task
      </button>   
    </form>
    </Container>
  );
};

export default TaskForm;
