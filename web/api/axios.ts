import axios from "axios";

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ensure the cookie is sent every api request
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
// instance.interceptors.request.use(function (config) {
//   const accessToken = getCookie("accessToken");
//   config.headers.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

export default instance;
