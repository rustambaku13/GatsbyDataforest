import { dummy_tasks } from "../dataSource/tasks";
import { Task } from "../classes/Task";
import { Tasks } from "../types/task";
import { ms_main } from ".";
export const getTask = async ({ taskId }: { taskId: string }) => {
  const fil = dummy_tasks.results.filter((item) => item.id === taskId);

  return new Task(fil[0]);
};

export const createTask = async (data: Tasks) => {
  return await ms_main.post("/create", {
    ...data,
  });
};
