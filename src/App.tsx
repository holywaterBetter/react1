import AddTask from './AddTask';
import TaskContext from './TaskContext';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
    <TaskContext>
      <h1>Day off in Kyoto</h1>
      <AddTask/>
      <TaskList/>
    </TaskContext>
  );
}