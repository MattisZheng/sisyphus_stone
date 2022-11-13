import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Rewards = () => {
  const [rewardList, setRewardList] = useState<string[]>([]);

  function getLocalStorage() {
    let getData: string = localStorage.getItem('rewards');
    setRewardList(JSON.parse(getData));
  }

  function handleAdd() {
    let newRewardList = [...rewardList, { title: 'reward', description: 'reward', points: 10 }];
    localStorage.setItem('rewards', JSON.stringify(newRewardList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newRewardList = [...rewardList];
    newRewardList[index][col] = value;
    localStorage.setItem('rewards', JSON.stringify(newRewardList));
    getLocalStorage();
  }

  function handleDelete(index) {
    let newRewardList = [...rewardList];
    newRewardList.splice(index, 1);
    localStorage.setItem('rewards', JSON.stringify(newRewardList));
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
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {rewardList.map((reward, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="title" type="text" value={reward.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="description" type="text" value={reward.description} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="points" type="number" value={reward.points} onBlur={handleUpdate} />
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

export default Rewards;
