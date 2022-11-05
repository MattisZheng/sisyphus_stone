import { Routes, Route } from "react-router-dom";

// 渲染MainContent

// function renderMainContent() {
//   switch (selectedKeys) {
//     case "1":
//       return <Login />;
//     case "2":
//       return <Overview />;
//     case "3":
//       return <History />;
//     case "4":
//       return <Reward />;
//     case "5":
//       return <Settings />;
//     default:
//       return <Overview />;
//   }
// };

const MainContent = () => {
  return (
    <Routes>
      <Route path="/user" element={<Login />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/history" element={<History />} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default MainContent;
