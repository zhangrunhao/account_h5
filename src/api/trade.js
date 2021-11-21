import request from "../util/request.js";

export const addTrade = (data) => {
  return request({
    url: "/api/trade/add",
    method: "Post",
    data,
  });
};

export const getTradeList = () => {
  return request({
    url: "/api/trade/list",
    method: 'Get'
  })
}

export const getTradeListByAccount = (id) => {
  return request({
    url: "/api/trade/listByAccount",
    method: "Get",
    params: {
      id
    }
  });
};
