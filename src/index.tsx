import ReactDOM from "react-dom/client";
import { App, ConfigProvider } from "antd";
import { Router, BrowserRouter } from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 2,
      },
    }}
  >
    <App message={{ duration: 1.8, maxCount: 1 }} style={{ height: "100%", width: "100%" }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </App>
  </ConfigProvider>
);
