//封装axios
import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: "http://localhost:9999",
  timeout: 1000 * 180,
});

// 添加请求拦截器
http.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么

    if (response.status == 200) {
      return response.data;
    } else {
      return { code: -1, msg: "请求失败！" };
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const get = function(api, object) {
  //如果对象为空，就创建一个空对象
  if (object == null) object = {};
  let promise = http.get(api, {
    params: object,
  });
  return promise;
};

const post = function(api, object) {
  if (object == null) object = {};
  let promise = http.post(api, qs.stringify(object));
  return promise;
};

const uploadFile = function(api, object) {
  if (object == null) object = {};
  let param = new FormData();
  for (let key in object) {
    param.append(key, object[key]);
  }
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }; //添加请求头
  let promise = http.post(api, param, config);
  return promise;
};

export { get, post, uploadFile };
