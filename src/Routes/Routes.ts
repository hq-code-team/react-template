import { RouteProps } from ".";
import { HomePage, ErrorPage, TestPage, Login, Reg } from "../Views";
import { LayoutView } from "../Components";

export const routes: RouteProps[] = [
  {
    Path: "/login",
    Title: "鸿雀 - 登录",
    Component: Login,
    IsLogin: false,
  },
  {
    Path: "/reg",
    Title: "鸿雀 - 登录",
    Component: Reg,
    IsLogin: false,
  },
  {
    Path: "/",
    Title: "鸿雀 - 首页",
    Component: LayoutView,
    IsLogin: false,
    Children: [
      {
        Path: "/",
        Title: "首页",
        Component: HomePage,
        IsLogin: false,
      },
      {
        Path: "/error",
        Title: "错误",
        Component: ErrorPage,
        IsLogin: false,
      },
      {
        Path: "/test",
        Title: "测试",
        Component: TestPage,
        IsLogin: false,
      },
    ],
  },
  {
    Path: "*",
    Title: "错误",
    Component: ErrorPage,
    IsLogin: false,
  },
];
