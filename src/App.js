import { useState } from "react";

function App() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // const [setSquaresState, currentSquaresState] = useState(squares);

  function show(event) {
    let playedSquareId = event.target.id;
    console.log(playedSquareId);
    let squarePlayed = document.getElementById(playedSquareId);
    squarePlayed.innerHTML = "X";
    squares[playedSquareId] = "X";
    console.log(squares);
  }

  return (
    <div className="game">
      <div className="frame">
        {squares.map((square, index) => (
          <div onClick={show} key={index} id={index}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
