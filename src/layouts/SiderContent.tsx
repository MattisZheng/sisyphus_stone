import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const menuItems = [
  {
    key: '1',
    label: 'User',
    icon: <UserOutlined />,
  },
  {
    key: '2',
    label: 'Overview',
    icon: <LayoutOutlined />,
  },
  {
    key: '3',
    label: 'History',
    icon: <CalendarOutlined />,
  },
  {
    key: '4',
    label: 'Reward',
    icon: <TrophyOutlined />,
  },
  {
    key: '5',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
];

const SiderContent = ({ selectedKeys, setSelectedKeys }: { selectedKeys: string[]; setSelectedKeys: (selectedKeys: string[]) => void }) => {
  const handleClick = (e: any) => {
    switch (e.key) {
      case '1':
        setSelectedKeys(['1']);
        break;
      case '2':
        setSelectedKeys(['2']);
        break;
      case '3':
        setSelectedKeys(['3']);
        break;
      case '4':
        setSelectedKeys(['4']);
        break;
      case '5':
        setSelectedKeys(['5']);
        break;
      default:
        setSelectedKeys(['2']);
        break;
    }
  };

  return <Menu theme="dark" selectedKeys={selectedKeys} onClick={handleClick} items={menuItems} />;
};

export default SiderContent;
