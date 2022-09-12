import {
  LayoutOutlined,
  TrophyOutlined,
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
  GithubOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Switch } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderContent from "./components/HeaderContent";

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
              { label: "Login", key: "1", icon: <UserOutlined /> },
              { label: "Tasks", key: "2", icon: <LayoutOutlined /> },
              { label: "History", key: "3", icon: <CalendarOutlined /> },
              { label: "Rewards", key: "4", icon: <TrophyOutlined /> },
              { label: "Settings", key: "5", icon: <SettingOutlined /> },
            ]}
            style={{ fontSize: "16px" }}
          ></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: "16px",
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
            {selectedKeys === "1" && <Login />}
            {selectedKeys === "2" && <Tasks />}
            {selectedKeys === "3" && <History />}
            {selectedKeys === "4" && <Reward />}
            {selectedKeys === "5" && <Settings />}
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "lightgray",
              fontSize: "large",
            }}
          >
            <footer style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ margin: "8px" }}>
                Developed by <a href="https://mattiszheng.com">Mattis Zheng</a>
              </p>
              <p style={{ margin: "8px" }}>Copyright</p>
              <a href="https://github.com/mattiszheng" style={{ margin: "8px" }}>
                <GithubOutlined />
              </a>

              <a href="" style={{ margin: "8px" }}>
                <InfoCircleOutlined />
              </a>
            </footer>
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
