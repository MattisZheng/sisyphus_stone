import "./App.css";
import Header from "./components/Header";
import Daily from "./components/Daily";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Weekly from "./components/Weekly";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Daily />
      <Weekly />
      <Footer />
    </div>
  );
}

export default App;
