import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Routines = () => {
  const [routineList, setRoutineList] = useState<string[]>([]);

  // get routine list
  // read data from storage, parse it, and set it to state
  function getRoutineList() {
    // get routine list from local storage
    const getData: string | null = localStorage.getItem('routines');
    // parse routine list to array
    
      setRoutineList(JSON.parse(getData));
    
  }

  // add
  // add new when user clicks the add button
  function handleAdd() {
    // create new routine list, add new routine to list
    let newRoutineList = [...routineList, { time: '12:00', title: 'routine' }];
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    // re-render routine list
    getRoutineList();
  }

  // read input value
  // save to local storage
  // set new routine list
  // save to local storage
  // re-render routine list

  // save updated value to local storage onBlur
  function handleUpdate(index, col, value) {
    // create new routine list
    let newRoutineList = [...routineList];
    // update routine list
    newRoutineList[index][col] = value;
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    console.log(newRoutineList);
    // re-render routine list
    getRoutineList();
  }

  // delete routine by index
  function handleDelete(index) {
    // remove routine by index
    let newRoutineList = [...routineList];
    newRoutineList.splice(index, 1);
    console.log(newRoutineList);
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    // re-render routine list
    getRoutineList();
  }

  // initial rendering
  useEffect(() => {
    getRoutineList();
    
  }, []);

  return (
    <div>
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
              <tr id={index}>
                <th>
                  <EditableInput index={index} col="time" type="time" value={routine.time} onBlur={handleUpdate} />
                </th>
                <td>
                  <EditableInput index={index} col="title" type="text" value={routine.title} onBlur={handleUpdate} />
                </td>
                <td>
                  {index}
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleAdd}>
        <PlusOutlined />
      </button>
    </div>
  );
};

export default Routines;
