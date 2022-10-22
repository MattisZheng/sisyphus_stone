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
import HeaderContent from "./components/HeaderContent";
// routes
import Login from "./routes/Login";
import Tasks from "./routes/Tasks";
import History from "./routes/History";
import Reward from "./routes/Reward";
import Settings from "./routes/Settings";

const initFile = {
  tasks: {
    daily: [
      {
        name: "daily 1",
        description: "daily 1 description",
        status: true,
      },
      {
        name: "daily 2",
        description: "daily 2 description",
        status: true,
      },
      {
        name: "daily 3",
        description: "daily 3 description",
        status: false,
      },
    ],
    weekly: [
      {
        name: "weekly 1",
        description: "weekly 1 description",
        status: true,
      },
      {
        name: "weekly 2",
        description: "weekly 2 description",
        status: true,
      },
    ],
    goal: [
      {
        name: "goal 1",
        deadline: "2022-09-17",
        description: "goal 1 description",
      },
      {
        name: "goal 2",
        deadline: "2023-01-01",
        description: "goal 2 description",
      },
      {
        name: "goal 3",
        deadline: "2023-01-10",
        description: "goal 3 description",
      },
    ],
    habit: [
      {
        name: "habit 1",
        description: "habit 1 description",
        startDate: "20220831",
      },
      {
        name: "habit 2",
        description: "habit 2 description",
        startDate: "20220831",
      },
    ],
    routine: [
      {
        time: "routine 1",
        description: "routine 1 description",
      },
      {
        time: "routine 2",
        description: "routine 2 description",
      },
      {
        time: "routine 3",
        description: "routine 3 description",
      },
      {
        time: "routine 4",
        description: "routine 4 description",
      },
    ],
  },
  history: [],
  rewards: [],
  settings: [],
};

const { Header, Content, Footer, Sider } = Layout;

// render main by selected keys
const renderMainNav = (selectedKeys) => {
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

  // check local storage
  // if !local storage, set initFile
  // if local storage, load local storage

  // set initFile to localStorage

  localStorage.setItem("initFile", JSON.stringify(initFile));

  const [file, setFile] = useState(JSON.parse(localStorage.getItem("initFile")));

  return (
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
          {renderMainNav(selectedKeys)}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "lightgray",
            fontSize: "large",
          }}
        >
          <footer style={{ display: "flex", justifyContent: "center" }}>
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
  );
}

export default App;
