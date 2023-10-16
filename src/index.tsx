import ReactDOM from "react-dom/client";
import { App, ConfigProvider } from "antd";
import { Router, BrowserRouter } from "./Routes";
// import "mac-scrollbar/dist/mac-scrollbar.css";
// import { GlobalScrollbar } from "mac-scrollbar";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <GlobalScrollbar />
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

//此处建议添加mac-scrollbar组件