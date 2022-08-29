import { useEffect, useState } from "react";

const Header = () => {
  // clock
  const [time, setTime] = useState();
  // update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // date counter
  // achievement
  // hints

  return <div>{time}</div>;
};

export default Header;
