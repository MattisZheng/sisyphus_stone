import { useState } from "react";

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

const HeaderContent = () => {
  // clock
  const [time, setTime] = useState(Date().toLocaleString());
  // update clock
  setInterval(() => {
    setTime(Date());
  }, 1000);

  return <div>{hours} : { minutes}</div>;
};

export default HeaderContent;
