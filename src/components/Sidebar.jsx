import React from "react";

const Sidebar = () => {
  // achievement
  // main
  // history - graph
  // calendar
  // settings
  return (
    <div>
      Sidebar
      <aside>
        {/* auth */}
        login
        <button>➡️</button>
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
          </ul>
        </nav>
        Settings
      </aside>
    </div>
  );
};

export default Sidebar;
