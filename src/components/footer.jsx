function Footer({ time, moves, gameOver }) {
  return (
    <>
      <div className="footer">
        <h1>{gameOver && "Game Over"}</h1>
        <div className="footer-container">
          <div className="time">
            <h3>Time</h3>
            <span>{time}</span>
          </div>
          <div className="moves">
            <h3>Moves</h3>
            <span>{moves}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
