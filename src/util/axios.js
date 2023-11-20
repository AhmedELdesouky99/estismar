import axios from "axios";
import { showErrors } from "./errorsAlerts";

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
export const userReq = axios.create({
  baseURL: url,
  headers,
});

// Add a request interceptor
admin.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.error(error, "interceptors");
    return Promise.reject(error);
  }
);

serviceProvider.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    showErrors(error);
    return Promise.reject(error);
  }
);
userReq.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    showErrors(error);
    return Promise.reject(error);
  }
);

// Add a request interceptor
admin.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log(error, "error");
    return Promise.reject(error);
  }
);

serviceProvider.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    showErrors(error);
    return Promise.reject(error);
  }
);
userReq.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    showErrors(error);
    return Promise.reject(error);
  }
);
