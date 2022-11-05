import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderContent from "./Layouts/HeaderContent";
import MainContent from "./Layouts/MainContent";
import FooterContent from "./Layouts/FooterContent";
import SiderContent from "./Layouts/SiderContent";
import initFile from "/initFile";

import Login from "./routes/Login";
import Overview from "./routes/Overview";
import History from "./routes/History";
import Reward from "./routes/Reward";
import Settings from "./routes/Settings";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // check local storage 检查本地存储
  // if !local storage, set initFile 设定初始文件
  // if local storage, load local storage 加载本地存储

  // set initFile to localStorage

  localStorage.setItem("initFile", JSON.stringify(initFile));

  const [data, setData] = useState(JSON.parse(localStorage.getItem("initFile")));

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider theme="dark" collapsible collapsedWidth="64">
          <SiderContent theme="dark" />
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
          <Content>
            <Routes>
              <Route path="/user" element={<Login />} />
              <Route path="/" element={<Overview />} />
              <Route path="/history" element={<History />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
          <Footer>
            <FooterContent />
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
