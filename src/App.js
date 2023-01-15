function App() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="game">
      <div className="frame">
        {squares.map((square, index) => (
          <img
            key={index}
            style={{ backgroundColor: "green" }}
            alt={square}
          ></img>
        ))}
      </div>
    </div>
  );
}
// add

export default App;
