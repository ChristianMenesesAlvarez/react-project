import { useState } from "react";
import { getCombinations, findMatchPosition } from '../logic/matrix.js';

export default function Grid(props) {
  const { columns, rows, token1, token2, repeatTimes } = props;
  const emptyGrid = [...Array(columns)].map(e => Array(rows).fill(''));
  const [gridState, setGrid] = useState(emptyGrid);
  const [activeToken, setToken] = useState(true);

  const insertToken = (column) => {
    const newArray = [...gridState];
    const playerToken = activeToken ? token1 : token2;  
    const index = newArray[column].findLastIndex(e => e === '');
    
    if (index === -1) {
      return;
    } else {
      newArray[column][index] = playerToken;
      setGrid(newArray);
      setToken(!activeToken);
    }
  }
  
  useEffect(() => {
    const winner = activeToken.repeat(repeatTimes);
    const combArray = getCombinations(gridState);
    if (combArray.some(item => item.match(winner))) {
      alert(`Player ${activeToken} wins!`);
      const pos = findMatchPosition(gridState, winner, 'i');
      console.log(pos);
    }
  }, [activeToken])
  
  return (
    <>
      <div className="button-panel">
        {[...Array(columns)].map((i, col) =>
          <button key={col} onClick={() => { insertToken(col) }}>Insert token</button>
        )}
      </div>
      <div className="grid">
        {[...Array(columns)].map((item, col) =>
          <div className="cell-column" key={col}>
            {rows.map((item, row) => <div className="cell" key={row} >{item}</div>)}
          </div>
        )}
      </div>
    </>
  )
}
