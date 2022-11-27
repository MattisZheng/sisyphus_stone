import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Habits = () => {
  const [habitList, setHabitList] = useState<string[]>([]);

  function getLocalStorage() {
    let getData: string | null = localStorage.getItem('habits');
    if (getData) {
      setHabitList(JSON.parse(getData));
    }
  }

  function handleAdd() {
    let newHabitList = [...habitList, { title: 'habit', description: 'habit', count: 0 }];
    localStorage.setItem('habits', JSON.stringify(newHabitList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newHabitList = [...habitList];
    newHabitList[index][col] = value;
    localStorage.setItem('habits', JSON.stringify(newHabitList));
    getLocalStorage();
  }

  function handleDelete(index: number) {
    let newHabitList = [...habitList];
    newHabitList.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(newHabitList));
    getLocalStorage();
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div>
      <h2>Habits</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {habitList.map((habit, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="title" type="text" value={habit.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="description" type="text" value={habit.description} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="count" type="number" value={habit.count} onBlur={handleUpdate} />
                </td>
                <td>
                  <DeleteOutlined
                    onClick={() => {
                      handleDelete(index);
                    }}
                  />
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

export default Habits;
