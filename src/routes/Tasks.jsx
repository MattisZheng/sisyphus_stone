import { useContext } from "react";

const Tasks = () => {
  const { tasks, setTasks } = useContext(DataContext);
  
  return <div>
    {tasks}
  </div>;
};

export default Tasks;
