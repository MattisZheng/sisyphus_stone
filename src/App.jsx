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
  getItem("登入", "0", <UserOutlined />),
  getItem("计划", "1", <LayoutOutlined />),
  getItem("奖励", "2", <TrophyOutlined />),
  getItem("历史记录", "3", <CalendarOutlined />),
  getItem("设置", "4", <SettingOutlined />),
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
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
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
