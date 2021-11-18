import { Toast } from "antd-mobile";
import axios from "axios";
import { getToken } from "./token.js";

const service = axios.create({
  // timeout: 15000,
});

service.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();
  return config;
});

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res
    } else {
      if (res.code === 401) {
        Toast.show({
          content: "请先登录帐号",
        });
        location.href = `${location.origin}/#/login`;
      } else {
        Toast.show({
          icon: "fail",
          content: res.message,
        });
        throw new Error(res.message)
      }
    }
  },
  (error) => {
    Toast.show({
      icon: 'fail',
      content: error.message
    })
  }
);

export default service;
