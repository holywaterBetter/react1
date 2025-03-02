import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  
  const code = <p><i>Hint: Your favorite city?</i></p>;
  return <div>
    {showHint && code}
    <Form />
    <button onClick={() => {
      setShowHint(!showHint);
    }}>{showHint? 'Hide hint' : 'Show hint'}</button>
  </div>;
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      title='text'
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
