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


export const addBorrowLend = (data) => {
  return request({
    url: "/api/trade/addBorrowLend",
    method: "Post",
    data,
  });
};

export const addRepaymentReceive = (data) => {
  return request({
    url: "/api/trade/addRepaymentReceive",
    method: "Post",
    data,
  });
};

export const updateBorrowLend = (data) => {
  return request({
    url: "/api/trade/updateBorrowLend",
    method: "Post",
    data,
  });
};


export const updateTrade = (data) => {
  return request({
    url: "/api/trade/update",
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
    url: "/api/trade/addTransfer",
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

export const getTradeListByBorrowLendId = (id) => {
  return request({
    url: "/api/trade/listByBorrowLendId",
    method: "Get",
    params: {
      id
    }
  });
};

export const getTradeListByOperate = (operate) => {
  return request({
    url: "/api/trade/listByOperate",
    method: "Get",
    params: {
      operate
    }
  });
};
