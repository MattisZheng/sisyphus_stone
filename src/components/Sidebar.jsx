import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Layout, Menu, Switch } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  // set sider collapsed, desfault: false
  const [collapsed, setCollapsed] = useState(false);

  // handleCollapse
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider theme={theme} collapsible collapsed={collapsed} collapsedWidth="64" onCollapse={handleCollapse}>
      <Switch checked={theme === "dark"} onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      <Menu
        theme={theme}
        defaultSelectedKeys={["1"]}
        mode="vertical"
        items={[
          { label: "Login", key: "1", icon: <UserOutlined />, path: "/login" },
          { label: "Tasks", key: "2", icon: <LayoutOutlined />, path: "/tasks" },
          { label: "History", key: "3", icon: <CalendarOutlined />, path: "/history" },
          { label: "Reward", key: "4", icon: <TrophyOutlined />, path: "/reward" },
          { label: "Settings", key: "5", icon: <SettingOutlined />, path: "/settings" },
        ]}
        style={{ fontSize: "16px" }}
        selectedKeys
      ></Menu>
    </Sider>
  );
};

export default Sidebar;
