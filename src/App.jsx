import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderContent from "./components/HeaderContent";
import FooterContent from "./components/FooterContent";

import Login from "./components/Login";
import Tasks from "./components/Tasks";
import History from "./components/History";
import Reward from "./components/Reward";
import Settings from "./components/Settings";

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
    <BrowserRouter>
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
              color: "white",
            }}
          >
            <HeaderContent />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            {/* 

            
            */}

          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "lightgray",
            }}
          >
            <FooterContent />
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
