import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";

import { Layout, Menu, Switch } from "antd";
import { useState, useEffect } from "react";

import HeaderContent from "./Layouts/HeaderContent";
import MainContent from "./Layouts/MainContent";
import FooterContent from "./Layouts/FooterContent";
import Sidebar from "./Layouts/Sidebar";

import Login from "./Routes/Login";
import Tasks from "./Routes/Tasks";
import History from "./Routes/History";
import Reward from "./Routes/Reward";
import Settings from "./Routes/Settings";

// initial file 初始文件
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

// render main content by selected keys

function App() {
  // set selectedKeys, default: 2
  const [selectedKeys, setSelectedKeys] = useState();

  // check local storage
  // if !local storage, set initFile
  // if local storage, load local storage

  // set initFile to localStorage

  localStorage.setItem("initFile", JSON.stringify(initFile));

  const [data, setData] = useState(JSON.parse(localStorage.getItem("initFile")));

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider theme="dark" collapsible collapsedWidth="64">
        <Sidebar theme="dark" />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "16px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HeaderContent />
        </Header>
        <Content
          style={{
            margin: "16px",
          }}
        >
          <MainContent />
          {data.tasks.daily.map((item) => (
            <div>{item.name}</div>
          ))}
          <button
            onClick={() =>
              setData({
                ...data,
                tasks: {
                  ...data.tasks,
                  daily: [
                    ...data.tasks.daily,
                    {
                      name: "daily 4",
                      description: "daily 4 description",
                      status: false,
                    },
                  ],
                },
              })
            }
          >
            Add New Task
          </button>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
