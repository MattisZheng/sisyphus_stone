import { useState } from "react";

import TaskBox from "./TaskBox";

const Weekly = () => {
  // week count

  // get history
  // setState
  let [weeklyTasks, setWeeklyTasks] = useState(["daily1", "daily2"]);

  // add tasks
  // delete tasks
  // update tasks

  // sort

  // render Weekly
  return (
    <div>
      Weekly
      <TaskBox />
    </div>
  );
};

export default Weekly;
