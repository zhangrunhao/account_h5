import request from "../util/request.js";

export const addTradeCate = (data) => {
  return request({
    url: "/api/trade_cate/add",
    method: "Post",
    data,
  });
};

export const getTradeCateList = () => {
  return request({
    url: "/api/trade_cate/list",
    method: "Get",
  });
};

export const updateTradeCate = (data) => {
  return request({
    url: "/api/trade_cate/update",
    method: "Post",
    data,
  });
};

export const deleteTradeCate = (id) => {
  return request({
    url: "/api/trade_cate/delete",
    method: "Post",
    data: {
      id,
    },
  });
};

export const getTradeCate = (id) => {
  return request({
    url: "/api/trade_cate/getDetail",
    method: "Get",
    params: {
      id,
    },
  });
};
