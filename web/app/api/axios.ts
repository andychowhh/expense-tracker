import axios from "axios";
import { getCookie } from "../../utils";

const defaultOptions = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ensure the cookie is sent every api request
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(async function (config) {
  const accessToken = await getCookie("accessToken");
  config.headers.Cookie = `accessToken=${accessToken}`;
  return config;
});

export default instance;
