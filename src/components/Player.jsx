import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
