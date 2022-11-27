import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Routines = () => {
  const [routineList, setRoutineList] = useState<string[]>([]);

  // get routine list
  // read data from storage, parse it, and set it to state
  function getLocalStorage() {
    // get routine list from local storage
    let getData: string | null = localStorage.getItem('routines');
    // parse routine list to array
    if (getData) {
      setRoutineList(JSON.parse(getData));
    }
  }

  // add new when user clicks the add button
  function handleAdd() {
    // create new routine list, add new routine to list
    let newRoutineList = [...routineList, { time: '12:00', title: 'routine' }];
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    // re-render routine list
    getLocalStorage();
  }

  // save updated value to local storage onBlur
  function handleUpdate(index: number, col: string, value: any) {
    // create new routine list
    let newRoutineList = [...routineList];
    // update routine list
    newRoutineList[index][col] = value;
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    // re-render routine list
    getLocalStorage();
  }

  // delete routine by index
  function handleDelete(index) {
    // remove routine by index
    let newRoutineList = [...routineList];
    newRoutineList.splice(index, 1);
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    // re-render routine list
    getLocalStorage();
  }

  // get routine list when component mounts
  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div style={{ border: '1px solid black', margin: '2px' }}>
      <h2>Routines</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {routineList.map((routine, index) => {
            return (
              <tr key={index}>
                <th>
                  <EditableInput index={index} col="time" type="time" value={routine.time} onBlur={handleUpdate} />
                </th>
                <td>
                  <EditableInput index={index} col="title" type="text" value={routine.title} onBlur={handleUpdate} />
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

export default Routines;
