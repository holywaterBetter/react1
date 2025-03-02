import { useState, useContext } from 'react';
import { DispatchContext } from './TaskContext';

let nextId = 3;
export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(DispatchContext);

  function onAddTask(text) {
    dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
  }
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
