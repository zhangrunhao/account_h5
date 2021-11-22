import request from "../util/request.js";

export const getDetail = (id) => {
  return request({
    url: "/api/trade/getDetail",
    method: "Get",
    params: {
      id
    }
  });
};


export const addTrade = (data) => {
  return request({
    url: "/api/trade/add",
    method: "Post",
    data,
  });
};

export const deleteTrade = (id) => {
  return request({
    url: "/api/trade/delete",
    method: "Post",
    data: {
      id
    }
  });
};

export const addTransfer = (data) => {
  return request({
    url: "/api/trade/transfer",
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
