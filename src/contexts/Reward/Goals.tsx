import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Goals = () => {
  const [goalList, setGoalList] = useState<string[]>([]);

  function getLocalStorage() {
    let getData: string = localStorage.getItem('goals');
    setGoalList(JSON.parse(getData));
  }

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

  useEffect(() => {
    getLocalStorage();
  }, []);

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
