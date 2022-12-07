import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  LayoutOutlined,
  TrophyOutlined,
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
  GithubOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import User from './contexts/User';
import Overview from './contexts/Overview';
import History from './contexts/History';
import Reward from './contexts/Reward';
import Setting from './contexts/Setting';
import HeaderContent from './layouts/HeaderContent';
import MainContent from './layouts/MainContent';
import FooterContent from './layouts/FooterContent';
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
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/history" element={<History />} />
            <Route path="/reward" element={<Reward />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <a href="https://github.com/mattiszheng/task_manager" target="_blank" style={{ margin: '5px' }}>
            {<GithubOutlined style={{ fontSize: '24px' }} />}
          </a>
          <a href="https://github.com/mattiszheng" target="_blank" style={{ margin: '5px' }}>
            {<InfoCircleOutlined style={{ fontSize: '24px' }} />}
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
