import { dummy_tasks } from "../dataSource/tasks";
import { Task } from "../classes/Task";
export const getTask = async ({ taskId }: { taskId: string }) => {
  const fil = dummy_tasks.results.filter((item) => item.id === taskId);

  return new Task(fil[0]);
};
