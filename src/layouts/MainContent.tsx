import { useState, useEffect } from 'react';
import User from '../contexts/User';
import Overview from '../contexts/Overview';
import History from '../contexts/History';
import Reward from '../contexts/Reward';
import Setting from '../contexts/Setting';

const MainContent = ({ selectedKeys }: { selectedKeys: string[] }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    switch (selectedKeys[0]) {
      case '1':
        setContent(<User />);
        break;
      case '2':
        setContent(<Overview />);
        break;
      case '3':
        setContent(<History />);
        break;
      case '4':
        setContent(<Reward />);
        break;
      case '5':
        setContent(<Setting />);
        break;
      default:
        break;
    }
  }, [selectedKeys]);

  return <div>{content}</div>;
};

export default MainContent;
