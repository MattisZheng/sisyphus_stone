import { useState } from "react";

class Task {
  constructor(
    taskId,
    taskTitle,
    taskDeadline,
    taskDetail,
    taskStatus,
    taskType
  ) {
    this.taskId = taskId;
    this.taskTitle = taskTitle;
    this.taskDeadline = taskDeadline;
    this.taskDetail = taskDetail;
    this.taskStatus = taskStatus;
    this.taskType = taskType;
  }
}

let daily1 = new Task(1,"daily1", 10, "daily1 detail", false, "default");
let daily2 = new Task(2,"daily2", 100, "daily2 detail", true, "special");

const Daily = () => {
  // class tasks

  // time count

  // get history

  // setState
  let [dailyTasks, setDailyTasks] = useState(daily1);

  // sort button

  // render Daily
  return (
    
    <div>
      <h1>Daily Tasks</h1>
      {daily1.taskTitle}
      {daily2.taskTitle}
    </div>
  );
};

export default Daily;
