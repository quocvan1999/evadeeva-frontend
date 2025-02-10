import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, App as AntdApp } from "antd";
import MainClient from "./layouts/client/MainClient";
import HomePageClient from "./pages/client/HomePageClient";
import MainAdmin from "./layouts/admin/MainAdmin";
import HomePageAdmin from "./pages/admin/HomePageAdmin";
import LoginPageAdmin from "./pages/admin/LoginPageAdmin";

function App() {
  return (
    <ConfigProvider>
      <AntdApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainClient />}>
              <Route index element={<HomePageClient />} />
            </Route>
            <Route path="admin" element={<MainAdmin />}>
              <Route index element={<HomePageAdmin />} />
              <Route path="login" element={<LoginPageAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
