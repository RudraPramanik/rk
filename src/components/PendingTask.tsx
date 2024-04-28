"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/redux/store";
import Text from "./ui/Text";
import Container from "./ui/Container";
import Button from "./ui/Button";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const PendingTasks: React.FC = () => {
  // Fetch tasks from Redux store and filter for those not completed
  const tasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) => !task.completed)
  );

  return (
    <Container className="my-6">
      <div className="container mx-auto mt-5">
        <Text variant="headingMd" color="primary" fontWeight="semibold">
          Pending Tasks
        </Text>
        <div className=" ">
          {tasks.length > 0 ? (
            <ul className="list-none p-0  grid grid-cols-3 gap-4 my-6">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className=" p-3 shadow rounded mb-2 flex justify-between items-center bg-secondary "
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
            <p>No pending tasks!</p>
          )}
        </div>
      </div>
      <Button variant="primary" size="sm">
        <Link href="/">Back to home</Link>
      </Button>
      {/*  */}
    </Container>
  );
};

export default PendingTasks;
