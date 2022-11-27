import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Plans = () => {
  const [planList, setPlanList] = useState<string[]>([]);

  function getLocalStorage() {
    let getData: string | null = localStorage.getItem('plans');
    setPlanList(JSON.parse(getData));
  }

  function handleAdd() {
    let newPlanList = [...planList, { title: 'plan', description: 'plan' }];
    localStorage.setItem('plans', JSON.stringify(newPlanList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newPlanList = [...planList];
    newPlanList[index][col] = value;
    localStorage.setItem('plans', JSON.stringify(newPlanList));
    getLocalStorage();
  }

  function handleDelete(index) {
    let newPlanList = [...planList];
    newPlanList.splice(index, 1);
    localStorage.setItem('plans', JSON.stringify(newPlanList));
    getLocalStorage();
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div>
      <h2>To-do</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {planList.map((plan, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="title" type="text" value={plan.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="description" type="text" value={plan.description} onBlur={handleUpdate} />
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

export default Plans;
