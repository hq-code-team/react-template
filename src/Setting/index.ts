type ENV = "dev" | "test" | "prod"; //开发 | 测试 | 生产

/**环境参数 */
const NODE_ENV: ENV = "dev";

const baseObj = {
  dev: "http://localhost:8080/",
  test: "",
  prod: "",
};

export const Config: ConfigProps = {
  /**
   * 路由地址前缀
   */
  baseUrl: baseObj[NODE_ENV],
  /**
   * cookie名称 [登录用]
   */
  loginCookieName: "login",
  LoginUrl: "/login",
  LoginEnable: false,
};
//项目配置

interface ConfigProps {
  readonly baseUrl: string;
  readonly loginCookieName: string;
   /**
   * 登录地址
   */
   readonly LoginUrl: string;
   /**
    * 是否启用登录
    */
   readonly LoginEnable: boolean;
}
