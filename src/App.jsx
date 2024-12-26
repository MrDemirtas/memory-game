import Header from "./components/header";
import Numbers from "./components/numbers";
import Footer from "./components/footer";
import { useState } from "react";

let firstTime = false; // * firstTime global değişkenini false olarak başlangıç değeri olarak atıyoruz
let timerId; // * timerId global değişkenini oluşturuyoruz

function App() {
  const [moves, setMoves] = useState(0); // * moves değişkenini useState ile oluşturuyoruz ve 0 olarak başlangıç değeri olarak atıyoruz
  const [time, setTime] = useState(0); // * time değişkenini useState ile oluşturuyoruz ve 0 olarak başlangıç değeri olarak atıyoruz
  const [gameOver, setGameOver] = useState(false); // * gameOver değişkenini useState ile oluşturuyoruz ve false olarak başlangıç değeri olarak atıyoruz

  // * timer fonksiyonu ile zamanı sayıyoruz
  function timer() {
    // * kronometreyi başlatıyoruz ve timer değişkenine atıyoruz
    const timer = setInterval(() => {
      setTime((prev) => prev + 1); // * time değişkenini 1 saniye arttırıyoruz. setTime kullanıyoruz çünkü state değiştiğinde component tekrar render olur.
    }, 1000);
    return timer; // * timer değişkenini döndürüyoruz
  }

  // * firstTime değişkeni false ise çalışır.
  if (!firstTime) {
    timerId = timer(); // * timer fonksiyonunu çağırıyoruz ve timerId'yi global değişken olarak atıyoruz
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
