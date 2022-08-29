import { useEffect, useState } from "react";

const Header = () => {
  // clock
  const [time, setTime] = useState();

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

  return <div>{time}</div>;
};

export default Header;
