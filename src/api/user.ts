import { ms_auth } from ".";

export const loginUser = async ({ email, password }) => {
  return await ms_auth.post("login", { email, password });
};
export const getLoggenInUser = async () => {
  return await ms_auth.get("/user-info");
};


export const signUpUser = async ({ email, password, fname, lname }) => {
  return await ms_auth.post("signup", { email, password, fname, lname });
};
