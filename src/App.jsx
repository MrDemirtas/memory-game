import Header from "./components/header";
import Numbers from "./components/numbers";
import Footer from "./components/footer";
import { useState } from "react";

let firstTime = false; // * firstTime global değişkenini başlangıç değeri olarak false atıyoruz
let timerId; // * timerId global değişkenini oluşturuyoruz

function App() {
  const [moves, setMoves] = useState(0); // * moves değişkenini useState ile oluşturuyoruz ve başlangıç değeri olarak 0 atıyoruz
  const [time, setTime] = useState(0); // * time değişkenini useState ile oluşturuyoruz ve başlangıç değeri olarak 0 atıyoruz
  const [gameOver, setGameOver] = useState(false); // * gameOver değişkenini useState ile oluşturuyoruz ve başlangıç değeri olarak false atıyoruz

  // * timer fonksiyonu ile kronometreyi başlatıyoruz
  function timer() {
    // * kronometreyi başlatıyoruz timerId değişkenine atıyoruz çünkü oyun bittiğinde clearInterval(timerId) ile zamanı durduracağız
    timerId = setInterval(() => {
      setTime((prev) => prev + 1); // * time değişkenini 1 saniye arttırıyoruz. setTime kullanıyoruz çünkü state değiştiğinde component tekrar render olur.
    }, 1000);
  }

  // * firstTime değişkeni false ise çalışır.
  if (!firstTime) {
    timer(); // * timer fonksiyonunu çağırıyoruz
    firstTime = true; // * firstTime değişkenini true yapıyoruz çünkü zamanı saymaya başladık. Eğer yapmazsak her render olduğunda timer fonksiyonu çalışır.
  }

  // * moves değişkenini 1 arttırıyoruz
  function handleMoves() {
    setMoves(moves + 1); // * moves değişkenini 1 arttırıyoruz
  }

  // * gameOver değişkenini true yapıyoruz ve timerId'yi temizliyerek zamanı durduruyoruz
  function handleGameOver() {
    setGameOver(true); // * gameOver değişkenini true yapıyoruz
    clearInterval(timerId); // * timerId'yi temizliyerek zamanı durduruyoruz
  }

  return (
    <div className="container">
      <Header />
      <Numbers
        handleMoves={handleMoves} // * handleMoves fonksiyonunu PROP DRILLING ile Numbers componentine gönderiyoruz
        handleGameOver={handleGameOver} // * handleGameOver fonksiyonunu PROP DRILLING ile Numbers componentine gönderiyoruz
      />
      <Footer
        moves={moves} // * moves değişkenini Footer componentine gönderiyoruz
        time={convertSecondsToTime(time)} // * time değişkenini zamanı formatlayarak Footer componentine gönderiyoruz
        gameOver={gameOver} // * gameOver değişkenini Footer componentine gönderiyoruz
      />
    </div>
  );
}

// * time değişkenini zamanı formatlayarak döndürüyoruz
function convertSecondsToTime(seconds) {
  const minutes = Math.floor((seconds % 3600) / 60); // * minutes değişkenini zamanın dakikasını alıyoruz
  const secs = seconds % 60; // * secs değişkenini zamanın saniyesini alıyoruz

  const formattedMinutes = minutes.toString().padStart(2, "0"); // * minutes değişkenini 2 haneli stringe dönüştürüyoruz ve eğer 2 haneli değilse 0 ekliyoruz
  const formattedSeconds = secs.toString().padStart(2, "0"); // * secs değişkenini 2 haneli stringe dönüştürüyoruz ve eğer 2 haneli değilse 0 ekliyoruz

  return `${formattedMinutes}:${formattedSeconds}`; // * zamanı formatlayarak döndürüyoruz
}

export default App;
