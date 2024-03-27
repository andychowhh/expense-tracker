import axios from "axios";
import { getCookie } from "../../utils";
import { cookies } from "next/headers";

const apiUrl =
  process.env.NEXT_SERVER_API_URL || process.env.NEXT_PUBLIC_API_URL;

const defaultOptions = {
  baseURL: apiUrl,
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
  const refreshToken = await getCookie("refreshToken");
  config.headers.Cookie = `accessToken=${accessToken};refreshToken=${refreshToken}`;
  return config;
});

// Refresh Token Logic
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await instance.get("/auth/refresh");
        const { accessToken } = response.data;

        // Update new accessToken in Cookie
        cookies().set("accessToken", accessToken);

        // Retry the original request with the new token
        originalRequest.headers.Cookie = `accessToken=${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.log("Axios Interceptor response error", error);
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
