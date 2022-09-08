import moment from "moment";
import React from "react";
import { useState } from "react";

const HeaderContent = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss a"));

  setInterval(() => {
    setTime(moment().format("hh:mm:ss a"));
  }, 1000);

  return <div>{time}</div>;
};

export default HeaderContent;
