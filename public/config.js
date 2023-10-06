/**环境参数 */
// type ENV = "dev" | "test" | "prod"; //开发 | 测试 | 生产

const NODE_ENV = "dev";

const baseObj = {
  dev: "http://localhost:17560/",
  test: "",
  prod: "",
};

const baseUrl = baseObj[NODE_ENV];
const LoginEnable = false; //是否开启登录

const IsDev = NODE_ENV === "dev"; //是否开发环境