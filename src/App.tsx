import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';

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

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsedWidth="64">
        <Menu
          theme="dark"
          items={[
            {
              key: '1',
              label: <Link to="/user">User</Link>,
              icon: <UserOutlined />,
            },
            {
              key: '2',
              label: <Link to="/overview">Overview</Link>,
              icon: <LayoutOutlined />,
            },
            {
              key: '3',
              label: <Link to="/history">History</Link>,
              icon: <CalendarOutlined />,
            },
            {
              key: '4',
              label: <Link to="/reward">Reward</Link>,
              icon: <TrophyOutlined />,
            },
            {
              key: '5',
              label: <Link to="/setting">Setting</Link>,
              icon: <SettingOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Header style={{ display: 'flex' }}>
          <HeaderContent />
        </Header>
        <Content style={{ overflowY: 'scroll' }}>
          <MainContent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
