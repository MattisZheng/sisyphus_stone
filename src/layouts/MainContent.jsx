import Login from "../Routes/Login";
import Tasks from "../Routes/Tasks";
import History from "../Routes/History";
import Reward from "../Routes/Reward";
import Settings from "../Routes/Settings";

// 渲染MainContent
function renderMainContent() {
  switch (selectedKey) {
    case "1":
      return <Login />;
    case "2":
      return <Tasks />;
    case "3":
      return <History />;
    case "4":
      return <Reward />;
    case "5":
      return <Settings />;
    default:
      return <Tasks />;
  }
};

const MainContent = ({selectedKey}) => {
  return <div></div>;
};

export default MainContent;
