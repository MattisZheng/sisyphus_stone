import { useState } from 'react';
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';

const History = () => {
  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));

  const onSelect = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <main>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar onSelect={onSelect} />
    </main>
  );
};

export default History;
