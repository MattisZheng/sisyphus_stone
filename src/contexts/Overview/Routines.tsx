import { useState, useEffect } from 'react';

// default routine object
const defaultRoutine = {
  time: '00:00',
  title: 'routine',
};

const Routines = () => {
  const [routineList, setRoutineList] = useState<string[]>([]);

  const localstorage: string | null = localStorage.getItem('routines');
  console.log(localstorage);
  // parse routine list
  if (localstorage) {
    setRoutineList(JSON.parse(localstorage));
    console.log('routine list loaded');
  }

  // read from local storage
  function getRoutineList() {
    // get routine list from local storage
    const localstorage: string | null = localStorage.getItem('routines');
    // parse routine list
    if (localstorage) {
      setRoutineList(JSON.parse(localstorage));
      console.log('routine list loaded');
    }
  }

  // create new routine
  function addRoutine() {
    const newRoutineList = [...routineList, JSON.stringify(defaultRoutine)];
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
  }

  // update routine to local storage
  function updateRoutine(index: number, newRoutine: string) {
    const newRoutineList = [...routineList];
    newRoutineList[index] = newRoutine;
    localStorage.setItem('routines', JSON.stringify(newRoutineList));
    setRoutineList(newRoutineList);
  }

  // delete routine
  function deleteRoutine(index: number) {
    const newRoutineList = [...routineList];
    newRoutineList.splice(index, 1);
    localStorage.setItem('routineList', JSON.stringify(newRoutineList));
    setRoutineList(newRoutineList);
  }

  useEffect(() => {
    getRoutineList();
    console.log('routineList', routineList);
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
        {routineList.map((routine) => {
          return (
            <tr key={routine.id}>
              <th>{routine.time}</th>
              <td>{routine.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Routines;
