import Task from "./Task";
import Draggable from "./Draggable";
import { MoreOutlined } from "@ant-design/icons";

// render weekly task

const Weekly = () => {
  return (
    <Draggable title="Weekly Task">
      <div>
        <Task />
      </div>
    </Draggable>
  );
};

export default Weekly;
