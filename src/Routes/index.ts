export { BrowserRouter} from "react-router-dom";

export interface RouteProps {
  Path: string;
  Component: any;
  Title: string;
  Icon?: any;
  IsLogin: boolean;
  Children?: RouteProps[];
}

export * from "./RouterBefore";
