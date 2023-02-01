import { useState } from "react";

export default function Grid(props) {
  const { columns, rows } = props;

  const defineGrid = () => {
    let array = [];
    for (let x = 0; x < columns; x++) {
      let row = [];
      for (let y = 0; y < rows; y++) row.push('');
      array.push(row);
    }
    return array;
  }

  const [gridState, setGrid] = useState(defineGrid());
  const [player, setPlayer] = useState(true);

  const setNewArray = (column) => {
    const newArray = [...gridState];
    if (!newArray[column].includes('')) return;
    const playerToken = player ? 'X' : 'O';
    for (let z = (newArray[column].length - 1); z >= 0; z--) {
      if (newArray[column][z] === '') {
        newArray[column][z] = playerToken;
        break;
      }
    }
    setPlayer(!player);
    setGrid(newArray);
    winHandler(newArray);
  }

  const winHandler = (array) => {
    const combArray = getCombinations(array);
    if (combArray.some(item => item.match(/XXXX/))) alert('Player X wins!');
    if (combArray.some(item => item.match(/OOOO/))) alert('Player O wins!');
    return;
  }

  return (
    <>
      <ButtonPanel columns={columns} callback={setNewArray} />
      <div className="grid">
        {[...Array(columns)].map((item, index) =>
          <CellColumn rows={gridState[index]} key={index} />
        )}
      </div>
    </>
  )
}

function ButtonPanel(props) {
  const { columns } = props;
  const insertToken = (column) => props.callback(column);

  return (
    <div className="button-panel">
      {[...Array(columns)].map((i, index) =>
        <button key={index} onClick={() => { insertToken(index) }}>
          Poner ficha
        </button>
      )}
    </div>
  )
}

function CellColumn(props) {
  const { rows } = props;
  return (
    <div className="cell-column">
      {rows.map((item, index) => <div className="cell" key={index} >{item}</div>)}
    </div>

  )
}

function getCombinations(arr) {
  const rows = arr.length;
  const columns = arr[0].length;
  let returnedSet = new Set();

  // Horizontals
  for (let x = 0; x < rows; x++) {
    let str1 = '', str2 = '';
    for (let y = 0; y < columns; y++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let y = (columns - 1); y >= 0; y--) str2 += arr[x][y] === '' ? '_' : arr[x][y];
    returnedSet.add(str1).add(str2);
  }

  // Verticals
  for (let y = 0; y < columns; y++) {
    let str1 = '', str2 = '';
    for (let x = 0; x < rows; x++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let x = (rows - 1); x >= 0; x--) str2 += arr[x][y] === '' ? '_' : arr[x][y];
    returnedSet.add(str1).add(str2);
  }

  // Diagonals From Left/Right Column
  for (let init = 0; init < rows; init++) {
    let str1 = '', str2 = '', str3 = '', str4 = '';
    for (let x = init, y = 0; x >= 0 && y < columns; x--, y++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let x = init, y = 0; x < rows && y < columns; x++, y++) str2 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let x = init, y = (columns - 1); x >= 0 && y >= 0; x--, y--) str3 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let x = init, y = (columns - 1); x < rows && y >= 0; x++, y--) str4 += arr[x][y] === '' ? '_' : arr[x][y];
    returnedSet.add(str1).add(str2).add(str3).add(str4);
  }

  // Diagonals From Top/Bottom Row
  for (let init = 0; init < columns; init++) {
    let str1 = '', str2 = '', str3 = '', str4 = '';
    for (let y = init, x = 0; y >= 0 && x < rows; x++, y--) str1 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let y = init, x = 0; y < columns && x < rows; x++, y++) str2 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let y = init, x = (rows - 1); y >= 0 && x >= 0; x--, y--) str3 += arr[x][y] === '' ? '_' : arr[x][y];
    for (let y = init, x = (rows - 1); y < columns && x >= 0; x--, y++) str4 += arr[x][y] === '' ? '_' : arr[x][y];
    returnedSet.add(str1).add(str2).add(str3).add(str4);
  }

  return [...returnedSet];
}