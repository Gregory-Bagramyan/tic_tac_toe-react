import { useState } from "react";

function App() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const availableSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let winner = null;

  // const [setSquaresState, currentSquaresState] = useState(squares);

  function show(event) {
    let playedSquareId =
      squares[event.target.id] !== "O" && squares[event.target.id] !== "X"
        ? event.target.id
        : null;
    if (playedSquareId === null) {
      return;
    }
    let squarePlayed = document.getElementById(playedSquareId);
    squarePlayed.innerHTML = "X";
    squares[playedSquareId] = "X";
    let notAvailableIndex = availableSquares.indexOf(Number(playedSquareId));
    availableSquares.splice(notAvailableIndex, 1);
    console.log(squares);
    console.log(availableSquares);
    checkEndGame();
    robotPlay();
  }

  const robotPlay = () => {
    if (availableSquares.length) {
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
      console.log(availableSquares.length);
    }
  };

  const checkEndGame = () => {
    if (
      (squares[0] === "X" && squares[1] === "X" && squares[2] === "X") ||
      (squares[3] === "X" && squares[4] === "X" && squares[5] === "X") ||
      (squares[6] === "X" && squares[7] === "X" && squares[8] === "X") ||
      (squares[0] === "X" && squares[3] === "X" && squares[6] === "X") ||
      (squares[1] === "X" && squares[4] === "X" && squares[7] === "X") ||
      (squares[2] === "X" && squares[5] === "X" && squares[8] === "X") ||
      (squares[0] === "X" && squares[4] === "X" && squares[8] === "X") ||
      (squares[2] === "X" && squares[4] === "X" && squares[6] === "X")
    ) {
      winner = "player";
    } else if (
      (squares[0] === "O" && squares[1] === "O" && squares[2] === "O") ||
      (squares[3] === "O" && squares[4] === "O" && squares[5] === "O") ||
      (squares[6] === "O" && squares[7] === "O" && squares[8] === "O") ||
      (squares[0] === "O" && squares[3] === "O" && squares[6] === "O") ||
      (squares[1] === "O" && squares[4] === "O" && squares[7] === "O") ||
      (squares[2] === "O" && squares[5] === "O" && squares[8] === "O") ||
      (squares[0] === "O" && squares[4] === "O" && squares[8] === "O") ||
      (squares[2] === "O" && squares[4] === "O" && squares[6] === "O")
    ) {
      winner = "robot";
    } else if (!Array.isArray(availableSquares) || !availableSquares.length) {
      winner = "draw";
    }
    endGame();
  };

  const endGame = () => {
    console.log(winner);
    // disable clicking
    // display winner
    // clear board
    // enable clicking
  };

  return (
    <div>
      <nav className="navbar">
        <div className="back">
          <a className="back-link" href="../index.html">
            BACK
          </a>
        </div>
      </nav>
      <div className="game">
        <div className="frame">
          {squares.map((square, index) => (
            <div onClick={show} key={index} id={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
