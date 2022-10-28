import Login from "../Routes/Login";
import Overview from "../routes/Overview";
import History from "../Routes/History";
import Reward from "../Routes/Reward";
import Settings from "../Routes/Settings";

// 渲染MainContent
function renderMainContent() {
  switch (selectedKey) {
    case "1":
      return <Login />;
    case "2":
      return <Overview />;
    case "3":
      return <History />;
    case "4":
      return <Reward />;
    case "5":
      return <Settings />;
    default:
      return <Overview />;
  }
};

const MainContent = ({selectedKey}) => {
  return <div></div>;
};

export default MainContent;
