import { LayoutOutlined, TrophyOutlined, UserOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { useState, useEffect } from "react";

const Sidebar = ({ theme }) => {
  // set selectedKeys, default: 2
  const [selectedKeys, setSelectedKeys] = useState();

  // handleSelect
  const handleSelect = (e) => {
    setSelectedKeys(e.key);
  };

  //pass selectedKeys to parent component on change
  // useEffect(() => {
  //   this.props.selectedKeys(selectedKeys);
  // }, [selectedKeys]);

  return (
    <Menu
      theme={theme}
      defaultSelectedKeys={["2"]}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
      items={[
        { label: "Login", key: "1", icon: <UserOutlined /> },
        { label: "Tasks", key: "2", icon: <LayoutOutlined /> },
        { label: "History", key: "3", icon: <CalendarOutlined /> },
        { label: "Rewards", key: "4", icon: <TrophyOutlined /> },
        { label: "Settings", key: "5", icon: <SettingOutlined /> },
      ]}
    />
  );
};

export default Sidebar;
