import { useState, useEffect } from 'react';
const Routines = () => {
  const [routines, setRoutines] = useState<string[]>();

  console.log(localStorage.getItem('routines'));

  // read from local storage
  useEffect(() => {
    setRoutines([]);
  }, []);

  return <table>Routine</table>;
};

export default Routines;
