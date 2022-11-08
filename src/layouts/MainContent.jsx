import Login from "../routes/Login";
import Overview from "../routes/Overview";
import History from "../routes/History";
import Reward from "../routes/Reward";
import Settings from "../routes/Settings";

const MainContent = ({ selectedKeys }) => {
  function renderMain(selectedKeys) {
    switch (selectedKeys) {
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
    console.log(selectedKeys);
  }

  return (
    <div>
      <div>{renderMain(selectedKeys)}</div>
    </div>
  );
};

export default MainContent;
