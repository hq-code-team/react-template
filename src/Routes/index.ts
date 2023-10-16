export { BrowserRouter} from "react-router-dom";

export interface RouteProps {
  Path: string;
  Component: any;
  Title: string;
  Index?: boolean;
  Icon?: any;
  IsLogin: boolean;
  Children?: RouteProps[];
}

export * from "./RouterBefore";
