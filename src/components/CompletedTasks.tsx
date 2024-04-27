'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RootState } from '@/redux/store';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface FormInputs {
  search: string;
}

const CompletedTasks: React.FC = () => {
  const { register, watch } = useForm<FormInputs>();
  const searchValue = watch('search', '');

  const completedTasks = useSelector((state: RootState) => 
    state.tasks.tasks.filter(task => task.completed && task.title.toLowerCase().includes(searchValue.toLowerCase()))
  );

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      <form className="mb-4">
        <input 
          {...register('search')}
          type="text"
          placeholder="Search completed tasks"
          className="px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
        />
      </form>
      <ul className="list-none p-0">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <li key={task.id} className="bg-gray-100 p-2 rounded mb-2 shadow">
              <span>{task.title}</span>
            </li>
          ))
        ) : (
          <li className="text-center text-sm text-gray-500">No tasks found</li>
        )}
      </ul>
      <Link href="/">
        <div className="text-blue-500 hover:text-blue-700">Back to Home</div>
      </Link>
    </div>
  );
};

export default CompletedTasks;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Link from 'next/link';
// import { RootState } from '@/redux/store';

// interface Task {
//   id: string;
//   title: string;
//   completed: boolean;
// }

// const CompletedTasks: React.FC = () => {
//   const completedTasks = useSelector((state: RootState) => 
//     state.tasks.tasks.filter(task => task.completed)
//   );

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
//       <ul className="list-none p-0">
//         {completedTasks.map((task) => (
//           <li key={task.id} className="bg-gray-100 p-2 rounded mb-2 shadow">
//             <span className="">{task.title}</span>
//           </li>
//         ))}
//       </ul>
//       <Link href="/">
//         <div className="text-blue-500 hover:text-blue-700">Back to Home</div>
//       </Link>
//     </div>
//   );
// };

// export default CompletedTasks;
