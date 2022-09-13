import Task from "./Task";
import { MoreOutlined } from "@ant-design/icons";

// render daily task

const Daily = () => {
  return (
    <div>
      <h2>
        Daily
        <MoreOutlined />
      </h2>
      <div>
        <Task />
      </div>
    </div>
  );
};

export default Daily;
