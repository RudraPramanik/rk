"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const TaskPage = () => {
  const { taskId } = useParams(); // Use useParams to get taskId

  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );

  if (!task) {
    return (
      <Container>
        <p>Task not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <Card className=" max-w-md mx-auto bg-[#190340] my-6 sm:my-24 text-gray-100 p-8 " >
        <div>
            <Text variant='headingMd' fontWeight="semibold"  >Task: {task.title}</Text>
          {/* <h1>{task.title}</h1> */}
          <Text variant='headingMd' fontWeight="semibold"  >Id: {task.id}</Text>
          <div>
          <Text variant='headingSm' fontWeight="semibold"  >
          Status: <span className=" text-lime-400 " >{task.completed ? "Completed" : "Pending"}</span>
          </Text>


          </div>
        
          <Link href="/" className=" text-blue-300" >
            <Text variant="bodySm" fontWeight="semibold" className="mt-6 text-sky-300 " >Back To Home</Text>
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default TaskPage;
