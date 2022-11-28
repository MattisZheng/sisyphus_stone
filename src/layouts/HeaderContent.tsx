import { useState } from 'react';
import * as dayjs from 'dayjs';

const HeaderContent = () => {
  const [time, setTime] = useState(dayjs().format('YY.MM.DD HH : mm : ss ddd'));

  setTimeout(() => {
    setTime(dayjs().format('YY.MM.DD HH : mm : ss ddd'));
  }, 1000);

  return (
    <>
      <h1 style={{ color: 'white' }}>{time} points</h1>
    </>
  );
};

export default HeaderContent;
