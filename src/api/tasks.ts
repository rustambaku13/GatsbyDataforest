import { dummy_tasks } from "../dataSource/tasks";
import { Task } from "../classes/Task";
import { Tasks } from "../types/task";
import { ms_main } from ".";
import { only2Decimals } from "../helpers/misc";
export const getTask = async ({ taskId }: { taskId: string }) => {
  const data = await ms_main.get(`/${taskId}`);
  data.data.price_per_datum = only2Decimals(data.data.price_per_datum);

  return data
};
export const getTaskSubmissions = async ({ taskId }: { taskId: string }) => {
  const data = await ms_main.get(`/${taskId}/submissions`);
  data.data.price_per_datum = only2Decimals(data.data.price_per_datum);

  return data
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
export const addSubmission = async (taskId,formData) => {
  return await ms_main.post(`/${taskId}/add-data`, formData);
};


