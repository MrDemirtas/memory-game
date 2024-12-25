import Header from "./components/header";
import Numbers from "./components/numbers";
import Footer from "./components/footer";
import { useState } from "react";

let firstTime = false;
let timerId;
function App() {
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function timer() {
    const timerId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return timerId;
  }

  if (!firstTime) {
    timerId = timer();
    firstTime = true;
  }

  function handleMoves() {
    setMoves(moves + 1);
  }

  function handleGameOver() {
    setGameOver(true);
    clearInterval(timerId);
  }

  return (
    <>
      <Header />
      <Numbers handleMoves={handleMoves} handleGameOver={handleGameOver} />
      <Footer moves={moves} time={convertSecondsToTime(time)} gameOver={gameOver} />
    </>
  );
}

function convertSecondsToTime(seconds) {
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = secs.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default App;
