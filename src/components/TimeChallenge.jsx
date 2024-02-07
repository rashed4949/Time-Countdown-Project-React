import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => previousTimeRemaining - 10);
    }, 10);
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h1>{title}</h1>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
