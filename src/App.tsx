import { useState } from "react";
import Block from "./components/Block";
import "./App.css";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [count, setCount] = useState(0);
  const [isBlockDisabled, setIsBlockDisabled] = useState(Array(9).fill(false));

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    if (isBlockDisabled[index]) {
      return;
    }

    setCount(count + 1);
    console.log(count);
    const stateCopy = [...state];
    stateCopy[index] = currentTurn;
    setIsBlockDisabled((prev) => {
      const updatedDisabled = [...prev];
      updatedDisabled[index] = true;
      return updatedDisabled;
    });

    const win = checkWinner(stateCopy);

    if (win) {
      setTimeout(() => {
        alert(`${currentTurn} won the game`);
        window.location.reload();
      }, 100);
    } else if (count === 8) {
      setTimeout(() => {
        alert("Match Draw");
        window.location.reload();
      }, 100);
    }
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  return (
    <>
    <h2 style={{margin: "30px"}}>Basic Tik-Toc Game</h2>
      <div className="board">
        <div className="row">
          <Block
            onClick={() => handleBlockClick(0)}
            value={state[0]}
            disabled={isBlockDisabled[0]}
          />
          <Block
            onClick={() => handleBlockClick(1)}
            value={state[1]}
            disabled={isBlockDisabled[1]}
          />
          <Block
            onClick={() => handleBlockClick(2)}
            value={state[2]}
            disabled={isBlockDisabled[2]}
          />
        </div>
        <div className="row">
          <Block
            onClick={() => handleBlockClick(3)}
            value={state[3]}
            disabled={isBlockDisabled[3]}
          />
          <Block
            onClick={() => handleBlockClick(4)}
            value={state[4]}
            disabled={isBlockDisabled[4]}
          />
          <Block
            onClick={() => handleBlockClick(5)}
            value={state[5]}
            disabled={isBlockDisabled[5]}
          />
        </div>
        <div className="row">
          <Block
            onClick={() => handleBlockClick(6)}
            value={state[6]}
            disabled={isBlockDisabled[6]}
          />
          <Block
            onClick={() => handleBlockClick(7)}
            value={state[7]}
            disabled={isBlockDisabled[7]}
          />
          <Block
            onClick={() => handleBlockClick(8)}
            value={state[8]}
            disabled={isBlockDisabled[8]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
