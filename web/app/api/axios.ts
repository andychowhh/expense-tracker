import axios from "axios";
import { getCookie } from "../../utils";
import { cookies } from "next/headers";

const NO_RETRY_HEADER = "x-no-retry";

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
    // If the error status is 401 and there is no NO_RETRY_HEADER flag,
    // it means the token has expired and we need to refresh it
    if (error?.response?.status === 401) {
      if (error.config.headers && error.config.headers[NO_RETRY_HEADER]) {
        return Promise.reject(error);
      }

      originalRequest.headers ||= {};
      originalRequest.headers[NO_RETRY_HEADER] = "true"; // string val only

      try {
        const response = await instance.get("/auth/refresh");
        const { accessToken } = response.data;

        // Update new accessToken in Cookie
        cookies().set("accessToken", accessToken);

        // Retry the original request with the new token
        originalRequest.headers.Cookie = `accessToken=${accessToken}`;
        console.log("Update accessToken successfully");
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
