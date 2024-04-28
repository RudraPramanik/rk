"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RootState } from '@/redux/store';
import Text from './ui/Text';
import Container from './ui/Container';
import Button from './ui/Button';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface FormInputs {
  search: string;
}

const PendingTasks: React.FC = () => {
  // Setup form for searching
  const { register, watch } = useForm<FormInputs>();
  const searchValue = watch('search', '');

  // Fetch tasks from Redux store and filter for those not completed and match the search query
  const tasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) =>
      !task.completed && task.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <Container className="my-6">
      <div className="container mx-auto mt-5 space-y-4">
        <Text variant="headingMd" color="primary" fontWeight="semibold">
          Pending Tasks
        </Text>
        <form>
          <input
            {...register('search')}
            type="text"
            placeholder="Search pending tasks"
            className="px-4 py-2 border rounded-md shadow-sm block w-full sm:text-sm border-gray-300 focus:outline-none "
          />
        </form>
        {tasks.length > 0 ? (
          <ul className="list-none p-0 grid grid-cols-3 gap-4 my-6">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-secondary p-3 shadow rounded mb-2 flex justify-between items-center"
              >
                <Text variant="bodyMd" color="primary">
                  Task: {task.title}
                </Text>
                <Button variant="primary" size="sm">
                  <Link href={`/tasks/${task.id}`}>
                    <div className="text-gray-100">View</div>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <Text variant="bodySm" color="primary">
            No pending tasks!
          </Text>
        )}
        <Button variant="primary" size="sm">
          <Link href="/">
            <div className="text-gray-100">Back to Home</div>
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default PendingTasks;
