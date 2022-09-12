import { useState } from "react";

const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

const HeaderContent = () => {
  // clock
  const [time, setTime] = useState(Date().toLocaleString());
  // update clock
  setInterval(() => {
    setTime(Date());
  }, 1000);

  return (
    <div>
      {month} / {day} {hours} : {minutes}
    </div>
  );
};

export default HeaderContent;
