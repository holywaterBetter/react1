import { useState, useRef } from 'react';

export default function Chat() {
    const [text, setText] = useState('');
    const textRef = useRef(text);

    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 3000);
    }

    return (
        <>
            <input
                title='input'
                value={text}
                onChange={e => {
                  setText(e.target.value);
                  textRef.current = e.target.value;
                }}
            />
            <button
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}
