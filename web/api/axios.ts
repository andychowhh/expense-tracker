import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("accessToken");
  config.headers.Authorization = token
    ? `Bearer ${token}`
    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDc0Mzk5Nzk3ODM4MDkyODc3NzAiLCJ1c2VybmFtZSI6IkFuZHkgQ2hvdyIsImlhdCI6MTcwNTgwMzMzOCwiZXhwIjoxNzA1ODAzMzk4fQ.7Q_sXgSDY8DnuH-Qci4nvYazwzUbPdDmnOLGPMFW3aI";
  return config;
});

export default instance;
