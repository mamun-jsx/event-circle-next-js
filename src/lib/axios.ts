import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://event-circle-backend.vercel.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// attach token
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// IMPORTANT: return ONLY data
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response?.data);
  },
);

export default axiosInstance;
