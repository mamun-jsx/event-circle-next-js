import axios from "axios";

const axiosIntance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// add token
axiosIntance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axiosIntance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response?.data || "Something went wrong");
  },
);
export default axiosIntance;
