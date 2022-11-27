import { useState } from 'react';
import { Alert, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const History = () => {
  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));

  function handleSelect(newValue: Dayjs) {
    setSelectedValue(newValue);
  }

  return (
    <>
      <Calendar onSelect={handleSelect} />
    </>
  );
};

export default History;
