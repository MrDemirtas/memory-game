function Footer({ time, moves, gameOver }) {
  // * time, moves ve gameOver prop'larını App componentinden alıyoruz
  return (
    <>
      <footer>
        <h1>{gameOver && "Game Over"}</h1> {/* gameOver değişkeni true ise "Game Over" yazısını gösterir, false ise göstermez */}
        <div className="footer-container">
          <div className="time">
            <h3>Time</h3>
            <span>{time}</span> {/* time değerini gösterir */}
          </div>
          <div className="moves">
            <h3>Moves</h3>
            <span>{moves}</span> {/* moves değerini gösterir */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
