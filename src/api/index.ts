import axios from "axios";
export const BASE_MEDIA = `https://briddgyazbucket.s3.amazonaws.com/static`;
export const bmify = (src) => `${BASE_MEDIA}/${src}`;
export const BACKEND_DATE_FORMAT = "YYYY-MM-DD";
export const FRONTEND_DATE_FORMAT = "DD MMM, YYYY";
export const ms_main = axios.create({
  // baseURL: "http://localhost:8002/",
  baseURL: "https://df-nosql-0.herokuapp.com/task",
  timeout: 30000,
});
export const ms_auth = axios.create({
  // baseURL: "http://localhost:8002/",
  baseURL: "https://df-sql-0.herokuapp.com/auth",
  timeout: 30000,
});

// Other Constants

export const PREFERRED_COUNTRIES = ["en"];
