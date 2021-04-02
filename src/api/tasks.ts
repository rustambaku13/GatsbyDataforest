import { dummy_tasks } from "../dataSource/tasks";

export const getTask = async ({ taskId }: { taskId: string }) => {
  const fil = dummy_tasks.results.filter((item) => item.id === taskId);
  return fil[0];
};
