import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
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
  getItem("计划", "1", <PieChartOutlined />),
  getItem("奖励", "2", <DesktopOutlined />),
  getItem("历史记录", "3", <TeamOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
