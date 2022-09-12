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
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderContent from "./components/HeaderContent";
// routes
import Login from "./routes/Login";
import Tasks from "./routes/Tasks";
import History from "./routes/History";
import Reward from "./routes/Reward";
import Settings from "./routes/Settings";

const { Header, Content, Footer, Sider } = Layout;

// render main by selected keys
const renderMain = (selectedKeys) => {
  switch (selectedKeys) {
    case "1":
      return <Login />;
    case "2":
      return <Tasks />;
    case "3":
      return <History />;
    case "4":
      return <Reward />;
    case "5":
      return <Settings />;
    default:
      return <Tasks />;
  }
};

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

  // set selectedKeys, default: 2
  const [selectedKeys, setSelectedKeys] = useState();

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
            defaultSelectedKeys={["2"]}
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
            {renderMain(selectedKeys)}
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
