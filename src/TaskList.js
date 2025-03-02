import { useContext, useState } from 'react';
import { TasksContext, DispatchContext } from './TaskContext';

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({task}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(DispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            console.warn('이거 맞냐')
            dispatch({
                type: 'changed',
                task: {
                    ...task,
                    text: e.target.value
                  }
              });
          }}
        />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
            dispatch({
                type: 'changed',
                task: {
                    ...task,
                    done: !task.done
                  }
              });
          }}
      />
      {taskContent}
      <button onClick={() => dispatch({type: 'deleted',id: task.id})}>
        Delete
      </button>
    </label>
  );
}
