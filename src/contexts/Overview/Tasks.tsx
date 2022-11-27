import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Tasks = () => {
  const [taskList, setTaskList] = useState<string[]>([]);

  function getLocalStorage() {
    let data: string = localStorage.getItem('tasks');
    setTaskList(JSON.parse(data));
  }

  function handleAdd() {
    let newTaskList = [...taskList, { title: 'task', description: 'task' }];
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newTaskList = [...taskList];
    newTaskList[index][col] = value;
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    getLocalStorage();
  }

  function handleDelete(index) {
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    getLocalStorage();
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div>
      <h2>Todays</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="title" type="text" value={task.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="description" type="text" value={task.description} onBlur={handleUpdate} />
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

export default Tasks;
