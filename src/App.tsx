import { useState, ChangeEvent } from "react";

export default function EditProfile() { 
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  function firstText() {
    if(isEdit) {
      return <input
        title="firstNameInput"
        value={firstNameInput}
        onChange= {e => setFirstNameInput(e.target.value)}
      />
    }
    return <b>{firstNameInput}</b>
  }

  function lastText() {
    if(isEdit) {
      return <input
        title="lastNameInput"
        value={lastNameInput}
        onChange= {e => setLastNameInput(e.target.value)}
      />
    }
    return <b>{lastNameInput}</b>
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        setIsEdit(!isEdit);
      }}>
        <label>
          First name: {firstText()}
        </label>
        <label>
          Last name: {lastText()}
        </label>
        <button type="submit">
          Edit Profile
        </button>
        <p><i>Hello, {firstNameInput} {lastNameInput}!</i></p>
      </form>
    </div>
  );
}
