import { useState, useEffect } from "react";
import { Layout } from "antd";
import HeaderContent from "./layouts/HeaderContent";
import MainContent from "./layouts/MainContent";
import FooterContent from "./layouts/FooterContent";
import SiderContent from "./layouts/SiderContent";
import initFiles from "./utils/initFiles";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // check local storage 检查本地存储
  // if !local storage, set initFile 设定初始文件
  // if local storage, load local storage 加载本地存储

  // navigation keys
  const [selectedKeys, setSelectedKeys] = useState(["2"]);
  useEffect(() => {
    console.log("app", selectedKeys);
  }, [selectedKeys]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider theme="dark" collapsible collapsedWidth="64">
        <SiderContent selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
      </Sider>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Content>
          <MainContent selectedKeys={selectedKeys} />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
