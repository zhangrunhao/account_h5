import request from "../util/request.js";

export const addRecord = (data) => {
  return request({
    url: "/api/record/add",
    method: "Post",
    data,
  });
};

export const getRecordList = () => {
  return request({
    url: "/api/record/getListByUser",
    method: 'Get'
  })
}

export const getRecordListByAccount = (data) => {
  return request({
    url: "/api/record/getListByAccount",
    method: "Get",
    params: data
  });
};
