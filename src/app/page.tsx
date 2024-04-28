'use client'

import Image from "next/image";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { useDispatch } from 'react-redux';
import { addTask } from "../redux/TaskSlice";
export default function Home() {
  const dispatch = useDispatch();

  const handleAddTask = (title: string) => {

    // Create new task
    const newTask = {
      id: Date.now().toString(), // ID generation by time
      title: title,
      completed: false
    };
    dispatch(addTask(newTask));
  };

  return (
    <div className="my-4 sm:my-8" >
      <TaskForm onAddTask={handleAddTask} />
      {/* <TaskLists/> */}
      <TaskList />
    </div>
  );
}
