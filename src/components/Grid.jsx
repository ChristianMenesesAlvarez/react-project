import { useState } from "react";
import { getCombinations } from '../logic/matrix.js';

export default function Grid(props) {
  const { columns, rows, token1, token2, repeatTimes } = props;
  const emptyGrid = [...Array(columns)].map(e => Array(rows).fill(''));
  const [gridState, setGrid] = useState(emptyGrid);
  const [activeToken, setToken] = useState(true);
  const [won, hasWon] = useState(false);

  const insertToken = (column) => {
    const newArray = [...gridState];
    const playerToken = activeToken ? token1 : token2;
    const index = newArray[column].findLastIndex(e => e === '');

    if (index === -1) {
      return;
    } else {
      newArray[column][index] = playerToken;
      setGrid(newArray);
      if (!checkWinner(newArray, playerToken)) setToken(!activeToken);
    }
  }

  const checkWinner = (arr, token) => {
    const winner = token.repeat(repeatTimes);
    const combArray = getCombinations(arr);
    if (combArray.some(item => item.match(winner))) {
      hasWon(true);
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {won && <h1>{`Player ${activeToken ? token1 : token2} wins!`}</h1>}
      <div className="button-panel">
        {[...Array(columns)].map((i, col) =>
          <button key={col} disabled={won} onClick={() => { insertToken(col) }}>Insert token</button>
        )}
      </div>
      <div className="grid">
        {gridState.map((i, col) =>
          <div className="cell-column" key={col}>
            {i.map((j, row) => <div className='cell' key={row} >{j}</div>)}
          </div>
        )}
      </div>
    </>
  )
}
