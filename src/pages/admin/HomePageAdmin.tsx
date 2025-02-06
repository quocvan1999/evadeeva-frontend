import React, { useEffect, useState } from "react";
import { LayoutOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { getCookie, isTokenExpired } from "../../utils/currencyUtils";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Người dùng", "1", <UserOutlined />),
  getItem("Caroucel", "2", <LayoutOutlined />),
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSelectMenu, setIsSelectMenu] = useState<string>("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleRenderMenu = () => {
    switch (isSelectMenu) {
      case "1":
        return <div>Nguoi Dung</div>;
      case "2":
        return <div>Carouve</div>;
      default:
        break;
    }
  };

  const checkLogin = () => {
    const accessToken: string | null = getCookie("accessToken");

    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    console.log(isLogin);

    // if (!isLogin) {
    //   navigate("/admin/login");
    // }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {},
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="px-5 py-2">
            <img src="/public/imgs/logo-footer.webp" alt="logo" />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onSelect={({ key }: { key: string }) => setIsSelectMenu(key)}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                marginTop: 16,
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {handleRenderMenu()}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
