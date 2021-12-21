import { isFunction } from "lodash-es";
import {setCookie, getCookie} from './cookie.js'
const tokenKey = "loginToken";


export const getToken = () => {
  if (localStorage && isFunction(localStorage.getItem)) {
    return localStorage.getItem(tokenKey);
  } else {
    return getCookie(tokenKey)
  }
};

export const setToken = (token) => {
  if (localStorage && isFunction(localStorage.setItem)) {
    return localStorage.setItem(tokenKey, token);
  } else {
    return setCookie(tokenKey, token, 365)
  }
};

export const removeToken = () => {
  // TODO: 未兼容cookie
  return localStorage.removeItem(tokenKey);
};

export const isLogin = () => {
  let token
  if (localStorage && isFunction(localStorage.getItem)) {
    token = localStorage.getItem(tokenKey);
  } else {
    token = getCookie(tokenKey)
  }
  return !!token
}
