import Draggable from "./Draggable";
import Task from "./Task";

// render daily task

const Daily = () => {
  return (
    <div>
      <Draggable title="Daily Task"/>
      <Task />
    </div>
  );
};

export default Daily;
