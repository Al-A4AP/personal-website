import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const APP_ID = import.meta.env.VITE_BACKENDLESS_APP_ID || "";
const API_KEY = import.meta.env.VITE_BACKENDLESS_API_KEY || "";

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/${APP_ID}/${API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Contact API sdh di tes aman per 7 Mar 2026
export const contactAPI = {
  submit: (data: any) => apiClient.post("/data/Messages", data),
};

export default apiClient;
