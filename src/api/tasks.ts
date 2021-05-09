import { dummy_tasks } from "../dataSource/tasks";
import { Task } from "../classes/Task";
import { Tasks } from "../types/task";
import { ms_main } from ".";
import { only2Decimals } from "../helpers/misc";
export const getTask = async ({ taskId }: { taskId: string }) => {
  const fil = dummy_tasks.results.filter((item) => item.id === taskId);

  return new Task(fil[0]);
};
export const getTasks = async (params = {}) => {
  const data = await ms_main.get("/list-tasks", { params });
  data.data.data.forEach((element) => {
    element.price_per_datum = only2Decimals(element.price_per_datum);
  });
  return data;
};
export const createTask = async (data: Tasks) => {
  return await ms_main.post("/create", {
    ...data,
    deadline: new Date(),
  });
};
