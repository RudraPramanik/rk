"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTask,
  toggleTaskCompleted,
  updateTaskTitle,
} from "@/redux/TaskSlice";
import { RootState } from "@/redux/store";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Card from "./ui/Card";
import Text from "./ui/Text";
import Link from "next/link";

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
    <Container>
      <ul className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {tasks.map((task) => (
          <Card key={task.id} className=" bg-secondary  p-4 ">
            <li className="flex flex-col">
              {editTaskId === task.id ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex items-center gap-2 flex-grow "
                >
                  <input
                    {...register("title", { required: true })}
                    className="flex-grow px-2 py-1 rounded border border-gray-300"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded"
                  >
                    Update
                  </button>
                </form>
              ) : (
                <>
                  <div className="flex flex-row space-x-4 items-center py-4 ">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleCompleted(task.id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <Text variant="bodyMd"> Mark as done </Text>
                  </div>
                  {/*  */}
                  <div className="space-x-4 flex justify-between ">
                    <Link href={`tasks/${task.id}`}>
                      <span
                        className={` text-lg ${
                          task.completed ? " text-gray-600 " : "text-black"
                        }`}
                      >
                        Task: {task.title}
                      </span>
                    </Link>

                    <button
                      onClick={() => handleEditTask(task)}
                      className=" bg-[#442f7a] hover:bg-primary text-white font-bold py-1 px-2 rounded"
                    >
                      Update
                    </button>
                  </div>
                  {/*  */}
                  <div className="flex flex-row justify-between my-4 ">
                    <button className="bg-primary hover:bg-[#130438] text-white font-bold py-1 px-2 rounded">
                      <Link href={`tasks/${task.id}`}>Task Details</Link>
                    </button>
                    <button
                      onClick={() => handleRemoveTask(task.id)}
                      className="bg-[#360e75] hover:bg-primary text-white font-bold py-1 px-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          </Card>
        ))}
      </ul>
    </Container>
  );
};

export default TaskList;
