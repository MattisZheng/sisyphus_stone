import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { useState } from "react";

const Sidebar = () => {
  // set selectedKeys, default: 2
  const [selectedKeys, setSelectedKeys] = useState();

  // handleSelect
  const handleSelect = (e) => {
    setSelectedKeys(e.key);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["2"]}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
      items={[
        { label: "User", key: "1", icon: <UserOutlined /> },
        { label: "Overview", key: "2", icon: <LayoutOutlined /> },
        { label: "History", key: "3", icon: <CalendarOutlined /> },
        { label: "Rewards", key: "4", icon: <TrophyOutlined /> },
        { label: "Settings", key: "5", icon: <SettingOutlined /> },
      ]}
    />
  );
};

export default Sidebar;
