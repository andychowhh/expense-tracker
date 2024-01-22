import axios from "axios";
import { getCookie } from "cookies-next";

const defaultOptions = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const accessToken = getCookie("accessToken");
  console.log({ accessToken });
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default instance;
