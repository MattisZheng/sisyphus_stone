import { useState, useEffect } from 'react';
import { Alert, Calendar } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
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
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const History = () => {
  const [historyList, setHistoryList] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));

  function getLocalStorage() {
    let getData: string | null = localStorage.getItem('history');
    if (getData) {
      setHistoryList(JSON.parse(getData));
    }
  }

  function handleSelect(date: Dayjs) {
    setSelectedValue(date);
  }

  function dateCellRender(value: Dayjs) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  function monthCellRender(value: Dayjs) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <Alert message={`Selected Date: ${selectedValue.format('YYYY-MM-DD')}`} />
      <Calendar onSelect={handleSelect} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      {/* edit box */}
      <div></div>
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

  function handleDelete(index) {
    let newGoalList = [...goalList];
    newGoalList.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(newGoalList));
    getLocalStorage();
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {goalList.map((goal, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="title" type="text" value={goal.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="description" type="text" value={goal.description} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="deadline" type="date" value={goal.deadline} onBlur={handleUpdate} />
                </td>
                <td>
                  <DeleteOutlined onClick={() => handleDelete(index)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PlusOutlined onClick={handleAdd} />
    </div>
  );
};

export default Goals;

*/
