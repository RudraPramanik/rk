'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/redux/store';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const CompletedTasks: React.FC = () => {
  const completedTasks = useSelector((state: RootState) => 
    state.tasks.tasks.filter(task => task.completed)
  );

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      <ul className="list-none p-0">
        {completedTasks.map((task) => (
          <li key={task.id} className="bg-gray-100 p-2 rounded mb-2 shadow">
            <span className="line-through">{task.title}</span>
          </li>
        ))}
      </ul>
      <Link href="/">
        <div className="text-blue-500 hover:text-blue-700">Back to Home</div>
      </Link>
    </div>
  );
};

export default CompletedTasks;
