import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import HeaderContent from './layouts/HeaderContent';
import MainContent from './layouts/MainContent';
import FooterContent from './layouts/FooterContent';
import SiderContent from './layouts/SiderContent';
import setInitFile from './utils/setInitFile';
import routines from './data/routines.json';
import settings from './data/settings.json';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  setInitFile('routines', routines);
  setInitFile('settings', settings);

  // navigation keys
  const [selectedKeys, setSelectedKeys] = useState(['2']);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider theme="dark" collapsible collapsed={true} collapsedWidth="64">
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
