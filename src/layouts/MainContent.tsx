import { Routes, Route } from 'react-router-dom';
import User from '../contexts/User';
import Overview from '../contexts/Overview';
import History from '../contexts/History';
import Reward from '../contexts/Reward';
import Setting from '../contexts/Setting';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/history" element={<History />} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default MainContent;
