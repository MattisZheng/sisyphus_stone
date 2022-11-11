import { useState, useEffect } from 'react';
const Routines = () => {
  const [routineList, setRoutineList] = useState<string[]>([]);

  // read routines from local storage
  const test = localStorage.getItem('routines');
  // read from local storage


  return (
    <div>
      {test}
    </div>
  );
};

export default Routines;
