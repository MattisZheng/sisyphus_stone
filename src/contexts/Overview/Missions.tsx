import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Missions = () => {
  const [missionList, setMissionList] = useState<string[]>([]);

  function getLocalStorage() {
    let getData: string = localStorage.getItem('missions');
    setMissionList(JSON.parse(getData));
  }

  function handleAdd() {
    let newMissionList = [...missionList, { status: false, title: 'mission' }];
    localStorage.setItem('missions', JSON.stringify(newMissionList));
    getLocalStorage();
  }

  function handleUpdate(index: number, col: string, value: any) {
    let newMissionList = [...missionList];
    newMissionList[index][col] = value;
    localStorage.setItem('missions', JSON.stringify(newMissionList));
    getLocalStorage();
  }

  function handleDelete(index) {
    let newMissionList = [...missionList];
    newMissionList.splice(index, 1);
    localStorage.setItem('missions', JSON.stringify(newMissionList));
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
            <th>Status</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission, index) => {
            return (
              <tr key={index}>
                <td>
                  <EditableInput index={index} col="status" type="checkbox" value={mission.status} onBlur={handleUpdate} />
                </td>
                <td>
                  <EditableInput index={index} col="title" type="text" value={mission.title} onBlur={handleUpdate} />
                </td>
                <td>
                  <DeleteOutlined onClick={() => handleDelete(index)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>
        <PlusOutlined onClick={handleAdd} />
      </button>
    </div>
  );
};

export default Missions;
