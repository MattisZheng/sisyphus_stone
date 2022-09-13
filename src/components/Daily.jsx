import Task from "./Task";
import { MoreOutlined } from "@ant-design/icons";
import Draggable from "./Draggable";

// render daily task

const Daily = () => {
  return (
    <Draggable title="Daily Task">
      <div>
        <Task />
      </div>
    </Draggable>
  );
};

export default Daily;
