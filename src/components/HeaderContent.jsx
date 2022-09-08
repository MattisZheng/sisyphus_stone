
import React from "react";
import { useState } from "react";

const HeaderContent = () => {
  // clock
  const [time, setTime] = useState(Date());
  // update clock
  setInterval(() => {
    setTime(Date());
  }, 1000);

  return <div>{time}</div>;
};

export default HeaderContent;
