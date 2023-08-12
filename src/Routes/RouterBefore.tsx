import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { routes } from "./Routes";
import { Cookies } from "react-cookie";
import { RouteProps } from ".";
import type { RouteObject } from "react-router-dom";

const cookie = new Cookies();

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
          <item.Component />
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
  console.log(location);
  
  if (props?.route?.Title) {
    document.title = props?.route?.Title;
  }
  const isLogin: boolean = !!cookie.get<string>("");
  if (props?.route?.IsLogin) {
    if (!isLogin) {
      return <Navigate to={"/login"} replace />;
    }
  }

  const routerKey = location.pathname;
  if (isLogin && ["/login"].includes(routerKey)) {
    return <Navigate to={"/"} replace />;
  }
  return <div>{props.children}</div>;
};

/**
 * @description 自定义路由
 * @returns
 */
export function Router() {
  return useRoutes(renderRoutes(routes));
}
