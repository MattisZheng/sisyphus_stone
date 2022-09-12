import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Layout, Menu, Switch } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderContent from "./components/HeaderContent";
import FooterContent from "./components/FooterContent";

import Sidebar from "./components/Sidebar";

import Login from "./routes/Login";
import Tasks from "./routes/Tasks";
import History from "./routes/History";
import Reward from "./routes/Reward";
import Settings from "./routes/Settings";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  // set sider collapsed, desfault: false
  const [collapsed, setCollapsed] = useState(false);

  // handleCollapse
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // set selectedKeys
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  // handleSelect
  const handleSelect = (e) => {
    setSelectedKeys(e.key);
  };

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {/* <Sidebar/> */}
        <Sider theme={theme} collapsible collapsed={collapsed} collapsedWidth="64" onCollapse={handleCollapse}>
          <Menu
            theme={theme}
            defaultSelectedKeys={["1"]}
            selectedKeys={selectedKeys}
            onSelect={handleSelect}
            mode="vertical"
            items={[
              { label: "Login", key: "1", icon: <UserOutlined />, path: "/login" },
              { label: "Tasks", key: "2", icon: <LayoutOutlined />, path: "/tasks" },
              { label: "History", key: "3", icon: <CalendarOutlined />, path: "/history" },
              { label: "Rewards", key: "4", icon: <TrophyOutlined />, path: "/reward" },
              { label: "Settings", key: "5", icon: <SettingOutlined />, path: "/settings" },
            ]}
            style={{ fontSize: "16px" }}
          ></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <HeaderContent />
            <Switch checked={theme === "dark"} onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            {selectedKeys}
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "lightgray",
              fontSize: "large",
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
