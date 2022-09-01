import { UserOutlined, LayoutOutlined, TrophyOutlined, CalendarOutlined, SettingOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";

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
  // set collapse setting to local storage if it do not exists
  if (localStorage.getItem("collapsed") === null) {
    localStorage.setItem("collapsed", true);
  }

  // read collapse setting from local storage
  const [collapsed, setCollapsed] = useState(localStorage.getItem("collapsed"));

  // on collapse change
  const handleCollapse = (value) => {
    setCollapsed(value);
    localStorage.setItem("collapsed", value);
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
          }}
        ></Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
