import axios from "axios";

const url = "https://admin.waqfnami.com/api";
const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const admin = axios.create({
  baseURL: url + "/admin",
  headers,
});
export const serviceProvider = axios.create({
  baseURL: url + "/provider",
  headers,
});
export const user = axios.create({
  baseURL: url,
  headers,
});
