import { useState, useEffect } from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import EditableInput from '../components/EditableInput';

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
      ];
      break;
    default:
  }
  return listData || [];
};
const History = () => {
  const [historyList, setHistoryList] = useState<string[]>([]);
  // read date from history
  // render value for each date

  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));

  function getLocalStorage() {
    let getData: string | null = localStorage.getItem('history');
    if (getData) {
      setHistoryList(JSON.parse(getData));
      console.log('historyList', historyList);
    }
  }

  function handleSelect(date: Dayjs) {
    setSelectedValue(date);
  }

  function dateCellRender(value: Dayjs) {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ listStyleType: 'none', overflow: 'none' }}>
        {listData.map((item) => (
          <li key={item.content}>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <Calendar onSelect={handleSelect} dateCellRender={dateCellRender} style={{ overflow: 'none' }} />
      <div>
        <h2>render {selectedValue.format('YYYY-MM-DD')}</h2>
      </div>
    </>
  );
};

export default History;

/*


const Goals = () => {
  function handleAdd() {
    let newGoalList = [...goalList, { status: false, title: 'goal' }];
    localStorage.setItem('goals', JSON.stringify(newGoalList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newGoalList = [...goalList];
    newGoalList[index][col] = value;
    localStorage.setItem('goals', JSON.stringify(newGoalList));
    getLocalStorage();
  }

};

*/
