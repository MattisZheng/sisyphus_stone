import React from "react";
import { useState } from "react";

const Daily = () => {
  // time count
  

  // get history
  // setState
  let [dailyTasks, setDailyTasks] = useState(["daily1", "daily2"]);

  // add tasks
  // delete tasks
  // update tasks

  // sort

  // render Daily
  return (
    <div>
      <h1>Daily Tasks</h1>
      {dailyTasks}
    </div>
  );
};

export default Daily;
