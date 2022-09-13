import Task from "./Task";
import { MoreOutlined } from "@ant-design/icons";

// render weekly task

const Weekly = () => {
  return (
    <div>
      <h2>
        Weekly
        <MoreOutlined />
      </h2>

      <div>
        <Task />
      </div>
    </div>
  );
};

export default Weekly;
