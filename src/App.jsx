import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import FooterContent from "./components/FooterContent";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  // auth
  getItem("Login", "0", <UserOutlined />),
  getItem("Tasks", "1", <LayoutOutlined />),
  getItem("Rewards", "2", <TrophyOutlined />),
  getItem("History", "3", <CalendarOutlined />),
  getItem("Settings", "4", <SettingOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(true);

  // handleCollapse
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} collapsedWidth="64" onCollapse={handleCollapse}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical" items={items} style={{ fontSize: "16px" }} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
            border: "1px solid black",
          }}
        ></Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
