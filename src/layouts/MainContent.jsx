import { Routes, Route } from "react-router-dom";
import Login from '../routes/Login';
import Overview from '../routes/Overview';
import History from '../routes/History';
import Reward from '../routes/Reward';
import Settings from '../routes/Settings';

const MainContent = () => {
  
  
  return (
    <Routes>
      <Route path="/user" element={<Login />} />
      <Route path="/" element={<Overview />} />
      <Route path="/history" element={<History />} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default MainContent;
