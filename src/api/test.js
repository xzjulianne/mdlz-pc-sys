import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/test/getList", //代码生成机生成的url,请修改为正确的url
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/test/edit", //代码生成机生成url的,请修改为正确的url
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/test/delete", //代码生成机生成url的,请修改为正确的url
    method: "post",
    data,
  });
}
