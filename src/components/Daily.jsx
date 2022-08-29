import React from "react";
import { useState } from "react";

import TaskBox from "./TaskBox";

const Daily = () => {
  // time count

  // get history

  // setState
  let [dailyTasks, setDailyTasks] = useState(["daily1", "daily2"]);

  // sort button

  // render Daily
  return (
    <div>
      <h1>Daily Tasks</h1>

      <TaskBox />
    </div>
  );
};

export default Daily;
