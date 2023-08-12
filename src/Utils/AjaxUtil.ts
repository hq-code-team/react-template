import qs from "qs";
import axios from "axios";
import { message } from "antd";
import { Cookies } from "react-cookie";
import { Config } from "../Setting";

const cookie = new Cookies();

let TOKEN: string;

/**axios默认配置 */
const instance = axios.create({
  withCredentials: true,
  baseURL: Config.baseUrl,
  timeout: 999999000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

instance.interceptors.request.use(
  (res) => {
    if (!TOKEN) {
      TOKEN= cookie.get<string>(Config.loginCookieName);
    }
    
    res.headers["Authorization"] = TOKEN;

    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (res.data.Code === undefined) {
      return res;
    }
    if (res.data.Code !== 100 && res.data.IsPrompt) {
      message.error(res.data.Message);
    }
    return res.data;
  },
  (err) => {
    if (err.response === undefined) {
      message.error("服务器断开连接。");
    } else if (err.response.status === 500) {
      message.error(JSON.parse(err.response.data).Message);
    } else if (err.response.status === 401) {
      window.location.href = err.response.data.Tag;
    }
    return Promise.reject(err);
  }
);

const AjaxUtil = {
  /**
   * 发起get请求
   * @param {string} url 地址
   * @param {object} data 携带数据
   * @returns 请求数据
   */
  get: async function (url: string, data: object, func: Function) {
    instance({
      method: "get",
      url: url,
      withCredentials: true,
      params: data,
    }).then((res) => {
      if (func && typeof func === "function") func(res);
    });
  },

  /**
   * 发起post请求
   * @param {string} url 请求路径
   * @param {object} data 请求数据
   */
  post: async function (url: string, data: object): Promise<any> {
    const result = await instance({
      method: "post",
      url: url,
      withCredentials: true,
      data: qs.stringify(data),
    });
    return result;
  },
};
