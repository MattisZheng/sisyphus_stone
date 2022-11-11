import { useState, useEffect } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import EditableInput from '../../components/EditableInput';

const Routine = {
  id: 1,
  time: '12:00',
  title: 'title',
};

const defaultColumn = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
      console.log('onBlur', value);
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
  },
};

const Routines = () => {
  const [routineList, setRoutineList] = useState<string[]>([]);
  const [value, setValue] = useState();

  // read from local storage
  function getRoutineList() {
    // get routine list from local storage
    const localstorage: string | null = localStorage.getItem('routines');
    // parse routine list
    if (localstorage) {
      setRoutineList(JSON.parse(localstorage));
    }
  }

  // create new routine when clicks add button
  function handleClick() {
    let newArr = [...routineList, { time: '12:00', title: 'routine' }];
    // save to local storage
    localStorage.setItem('routines', JSON.stringify(newArr));
    // re-render routine list
    getRoutineList();
  }

  // update input value
  function handleEdit(e) {
    console.log(e);
  }
  // read input value
  // save to local storage
  // re-render routine list

  // save to local storage onBlur
  function handleSave() {
    console.log('save');
  }

  // delete routine
  function deleteRoutine(index: number) {
    // create new routine list
    const newRoutineList = [...routineList];
    newRoutineList.splice(index, 1);
    // save to local storage
    localStorage.setItem('routineList', JSON.stringify(newRoutineList));
    setRoutineList(newRoutineList);
  }

  function handleDelete(index: number) {
    deleteRoutine(index);
  }

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
          {routineList.map((routine) => {
            return (
              <tr>
                {routine.time}
                {routine.title}
                <th>
                  <EditableInput type="time" value={routine.time} onChange={handleEdit} onBlur={handleSave} />
                </th>
                <td>
                  <EditableInput type="text" value={routine.time} onChange={handleEdit} onBlur={handleSave} />
                </td>
                <td>
                  <button onClick={handleDelete}>
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleClick}>
        <PlusOutlined />
      </button>
    </div>
  );
};

export default Routines;
