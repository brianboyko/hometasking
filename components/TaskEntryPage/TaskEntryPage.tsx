import React from "react";
import TaskTemplate from "../Tasks/TaskTemplate";
import { Task } from "../Tasks/data/index";

export const TaskEntryPage: React.FC<{ id: number; taskData: Task }> = ({
  id,
  taskData
}) => {
  const taskIndex = id - 1;

  return (
    <div>
      <TaskTemplate task={taskData} index={taskIndex} />;
    </div>
  );
};

export default TaskEntryPage;
