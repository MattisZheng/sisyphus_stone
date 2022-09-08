import moment from "moment";
import React from "react";
import { useState } from "react";

const HeaderContent = () => {
  // clock
  const [time, setTime] = useState(moment().format("hh:mm:ss a"));
  // update clock
  setInterval(() => {
    setTime(moment().format("hh:mm:ss a"));
  }, 1000);

  return <div>{time}</div>;
};

export default HeaderContent;
