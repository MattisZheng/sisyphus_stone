import { DoubleRightOutlined } from "@ant-design/icons";

const Sidebar = () => {
  // achievement
  // main
  // history - graph
  // calendar
  // settings
  return (
    <aside>
      login
      {/* icon anchor auth*/}
      <button>
        <DoubleRightOutlined />
      </button>
      <nav>
        <ul>
          <li>
            <a href="">Main</a>
          </li>
          <li>
            <a href="">Graphs</a>
          </li>
          <li>
            <a href="">Rewards</a>
          </li>
          <li>
            <a href="">Calendar</a>
          </li>
        </ul>
      </nav>
      <a href="">Settings</a>
    </aside>
  );
};

export default Sidebar;
