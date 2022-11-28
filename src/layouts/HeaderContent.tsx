import { useState } from 'react';
import dayjs from 'dayjs';

const HeaderContent = () => {
  const [time, setTime] = useState(dayjs().format('YY.MM.DD HH : mm : ss ddd'));

  setTimeout(() => {
    setTime(dayjs().format('YY.MM.DD HH : mm : ss ddd'));
  }, 1000);

  return (
    <>
      <h1 style={{ color: 'white' }}>{time}</h1>
      <p style={{ color: 'white' }}>points</p>
    </>
  );
};

export default HeaderContent;
