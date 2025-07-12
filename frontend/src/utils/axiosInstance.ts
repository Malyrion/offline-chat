import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:3000",  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosInstance;
