import axios from "axios";
const API_BASE_URL = "https://milliardapi.itlink.uz";

const token = localStorage.getItem("token");

export const axiosServices = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
