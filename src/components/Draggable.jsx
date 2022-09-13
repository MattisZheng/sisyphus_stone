import React from "react";
import { MoreOutlined } from "@ant-design/icons";

const Draggable = ({ title }) => {
  return (
    <div>
      <h2>
        {title}
        <MoreOutlined />
      </h2>
    </div>
  );
};

export default Draggable;
