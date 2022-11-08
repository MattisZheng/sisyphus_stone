import { useState, useEffect } from "react";

import User from "../routes/User";
import Overview from "../routes/Overview";
import History from "../routes/History";
import Reward from "../routes/Reward";
import Settings from "../routes/Settings";

const MainContent = ({ selectedKeys }) => {
  const [content, setContent] = useState(<Overview />);
  useEffect(() => {
    switch (selectedKeys) {
      case "1":
        setContent(<User />);
        break;
      case "2":
        setContent(<Overview />);
        break;
      case "3":
        setContent(<History />);
        break;
      case "4":
        setContent(<Reward />);
        break;
      case "5":
        setContent(<Settings />);
        break;
      default:
        setContent(<Login />);
        break;
    }
  }, [selectedKeys]);

  return <div>{content}</div>;
};

export default MainContent;
