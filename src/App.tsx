import { useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
//
import HeaderContent from './layouts/HeaderContent';
import MainContent from './layouts/MainContent';
import FooterContent from './layouts/FooterContent';
import SiderContent from './layouts/SiderContent';
// utils
import setInitFile from './utils/setInitFile';
// init file settings
import plans from './data/plans.json';
import tasks from './data/tasks.json';
import routines from './data/routines.json';
import habits from './data/habits.json';
import missions from './data/missions.json';
import rewards from './data/rewards.json';
import goals from './data/goals.json';
import configs from './data/configs.json';
import history from './data/history.json';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  // init files
  setInitFile('plans', plans);
  setInitFile('tasks', tasks);
  setInitFile('routines', routines);
  setInitFile('habits', habits);
  setInitFile('missions', missions);
  setInitFile('rewards', rewards);
  setInitFile('goals', goals);
  setInitFile('configs', configs);
  setInitFile('history', history);

  const [selectedKeys, setSelectedKeys] = useState(['2']);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsedWidth="64">
        <SiderContent selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <HeaderContent />
        </Header>
        <Content style={{ overflowY: 'scroll' }}>
          <MainContent selectedKeys={selectedKeys} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
