import { useState } from "react";

function App() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const availableSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // const [setSquaresState, currentSquaresState] = useState(squares);

  function show(event) {
    let playedSquareId = event.target.id;
    let squarePlayed = document.getElementById(playedSquareId);
    squarePlayed.innerHTML = "X";
    squares[playedSquareId] = "X";
    let notAvailableIndex = availableSquares.indexOf(Number(playedSquareId));
    availableSquares.splice(notAvailableIndex, 1);
    console.log(squares);
    console.log(availableSquares);
    robotPlay();
  }

  const robotPlay = () => {
    let robotChoice =
      availableSquares[Math.floor(Math.random() * availableSquares.length)];
    console.log(robotChoice);
    let squareChosenByRobot = document.getElementById(robotChoice);
    squareChosenByRobot.innerHTML = "O";
    squares[robotChoice] = "O";
    let notAvailableIndex = availableSquares.indexOf(Number(robotChoice));
    availableSquares.splice(notAvailableIndex, 1);
    console.log(squares);
    console.log(availableSquares);
  };

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
