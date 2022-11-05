import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const menuItems = [
  {
    key: "1",
    label: "User",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Overview",
    icon: <LayoutOutlined />,
  },
  {
    key: "3",
    label: "History",
    icon: <CalendarOutlined />,
  },
  {
    key: "4",
    label: "Reward",
    icon: <TrophyOutlined />,
  },
  {
    key: "5",
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

const SiderContent = () => {
  const [selectedKeys, setSelectedKeys] = useState("1");

  const handleSelect = (e) => {
    setSelectedKeys(e.key);
    switch (e.key) {
      case "1":
        location.href = "/user";
        break;
      case "2":
        location.href = "/";
        break;
      case "3":
        location.href = "/history";
        break;
      case "4":
        location.href = "/reward";
        break;
      case "5":
        location.href = "/settings";
        break;
      default:
        break;
    }
    console.log(e);
  };

  return <Menu theme="dark" defaultSelectedKeys={["2"]} selectedKeys={selectedKeys} onSelect={handleSelect} items={menuItems} />;
};

export default SiderContent;
