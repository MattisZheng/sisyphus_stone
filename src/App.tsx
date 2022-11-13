import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import HeaderContent from './layouts/HeaderContent';
import MainContent from './layouts/MainContent';
import FooterContent from './layouts/FooterContent';
import SiderContent from './layouts/SiderContent';
import setInitFile from './utils/setInitFile';
import plans from './data/plans.json'
import tasks from './data/tasks.json'
import routines from './data/routines.json';
import habits from './data/habits.json';
import missions from './data/missions.json';
import rewards from './data/rewards.json';
import goals from './data/goals.json';
import settings from './data/settings.json';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  setInitFile('plans', plans);
  setInitFile('tasks', tasks);
  setInitFile('routines', routines);
  setInitFile('habits', habits);
  setInitFile('missions', missions);
  setInitFile('rewards', rewards);
  setInitFile('goals', goals);
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
