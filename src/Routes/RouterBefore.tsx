import React, { Suspense } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Spin } from "antd";

import { RouteProps } from ".";
import { routes } from "./Routes";
import { cookie } from "../Utils";
import { Config } from "../Setting";

/**
 * @description 渲染路由
 * @param routes
 * @returns
 */
const renderRoutes = (routes: RouteProps[]): RouteObject[] => {
  return routes.map((item: RouteProps) => {
    const route: RouteObject = { path: item.Path };

    if (item.Component) {
      route.element = route.element = (
        <RouterBeforeEach route={item}>
          <Suspense
            fallback={
              <div
                style={{
                  height: "calc(100% - 2rem)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Spin />
              </div>
            }
          >
            <item.Component />
          </Suspense>
        </RouterBeforeEach>
      );
    }
    if (item.Children) {
      route.children = renderRoutes(item.Children);
    }
    return route;
  });
};

/**
 * @description 路由守卫
 * @param props
 * @returns
 */
const RouterBeforeEach = (props: { route: RouteProps; children: any }) => {
  const location = useLocation();

  if (props?.route?.Title) {
    document.title = "鸿雀" + (props?.route?.Title ? " - " + props?.route?.Title : "");
  }
  const isLogin: boolean = !!cookie.get<string>(Config.loginCookieName);

  if (Config.LoginEnable) {
    if (props?.route?.IsLogin) {
      if (!isLogin) {
        return <Navigate to={Config.LoginUrl} replace />;
      }
    }
  }

  const routerKey = location.pathname;
  if (isLogin && [Config.LoginUrl].includes(routerKey)) {
    return <Navigate to={"/"} replace />;
  }
  return <>{props.children}</>;
};

/**
 * @description 自定义路由
 * @returns
 */
export function Router() {
  return useRoutes(renderRoutes(routes));
}
