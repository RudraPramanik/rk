"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RootState } from "@/redux/store";
import Card from "./ui/Card";
import Text from "./ui/Text";
import Container from "./ui/Container";
import Button from "./ui/Button";

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
  const searchValue = watch("search", "");

  const completedTasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter(
      (task) =>
        task.completed &&
        task.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <Container>
      <div className="container mx-auto mt-10 space-y-4 ">
        <Text
          variant="headingSm"
          fontWeight="semibold"
          className=" text-gray-600 "
        >
          Search Tasks
        </Text>
        <div>
          <form className="">
            <input
              {...register("search")}
              type="text"
              placeholder="Search completed tasks"
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none block w-full sm:text-sm border-gray-300"
            />
          </form>
        </div>
        <Text
          variant="headingMd"
          fontWeight="semibold"
          className=" text-gray-600 "
        >
          Completed Tasks
        </Text>
        <ul className="list-none p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 my-6  ">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <Card
                key={task.id}
                className="bg-secondary flex flex-row justify-between p-4 "
              >
                <li className="">
                  {/* <span className="" >{task.title}</span> */}
                  <Text variant="bodyMd" color="primary">
                    Task: {task.title}
                  </Text>
                </li>
                <Link href={`/tasks/${task.id}`}>
                  <Button variant="primary" size="sm">
                    View
                  </Button>
                </Link>
              </Card>
            ))
          ) : (
            <li className="text-center text-sm text-gray-500">
              No tasks found
            </li>
          )}
        </ul>
        <Link href="/" className="" >
          <Button variant="primary" size="sm" >
            <div className="text-gray-100" >Back to Home</div>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default CompletedTasks;
