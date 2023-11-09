import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let playerName = <span className="player-name">{name}</span>;

  function handleChange(event) {
    setName(event.target.value);
  }

  if (isEditing) {
    playerName = <input required value={name} onChange={handleChange} />;
  }
  function handleEditing(){
    setIsEditing((wasEditing) => !wasEditing)
    if(isEditing)
      onChangeName(symbol, name)
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
