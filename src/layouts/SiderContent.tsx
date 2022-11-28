import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const menuItems = [
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
];

const SiderContent = () => {
  return <Menu theme="dark" items={menuItems} />;
};

export default SiderContent;
