import { useState } from "react";

export default function Calc() {
  const [screenText, setScreen] = useState('');

  const setScreenValue = (e) => {
    const key = e.target.value;
    switch (key) {
      case '=':
        try {
          const result = getResult(screenText);
          setScreen(result);
        } catch (e) {
          setScreen(e.message);
        }
        break;
      case 'CA':
        setScreen('');
        break;
      case 'C':
        const scrStr1 = screenText.slice(0, -1);
        setScreen(scrStr1);
        break;
      default:
        const scrStr2 = screenText + e.target.value;
        setScreen(scrStr2);
    }
  }

  return (
    <div className="calc-wrapper">
      <Screen>{screenText}</Screen>
      <Panel callback={(e) => setScreenValue(e)} />
    </div>
  )
}

function Screen(props) {
  const { children } = props;

  return (
    <div className="screen">
      {children}
    </div>
  )
}

function Panel(props) {
  const { callback } = props;
  const row1 = ['7', '8', '9', '(', ')'];
  const row2 = ['4', '5', '6', '/', '*'];
  const row3 = ['1', '2', '3', '+', '-'];
  const row4 = ['0', '.', '=', 'C', 'CA'];

  return (
    <div className="panel">
      <div className="panel-row">
        {row1.map(i =>
          <button className="panel-btn" value={i} key={`key${i}`} onClick={callback} >
            {i}
          </button>
        )}
      </div>
      <div className="panel-row">
        {row2.map(i =>
          <button className="panel-btn" value={i} key={`key${i}`} onClick={callback} >{i}</button>
        )}
      </div>
      <div className="panel-row">
        {row3.map(i =>
          <button className="panel-btn" value={i} key={`key${i}`} onClick={callback} >{i}</button>
        )}
      </div>
      <div className="panel-row">
        {row4.map(i =>
          <button className="panel-btn" value={i} key={`key${i}`} onClick={callback} >{i}</button>
        )}
      </div>
    </div>
  )
}

function getResult(screenText) {
  function splitString(str) {
    let arr = [], temp = '';
    for (let x = 0; x < str.length; x++) {
      if (str[x].match(/[0-9.]/)) {
        temp += str[x];
        if (x === (str.length - 1)) arr.push(temp);
      } else {
        if (temp !== '') arr.push(temp);
        if (x > 0 && str[x].match(/[/*-+]/) && str[x - 1].match(/[/*-+]/)) throw new Error('Cant use two symbols together');
        temp = '';
        arr.push(str[x]);
      }
    }
    return arr;
  }

  function operation(arr, sym) {
    while (arr.includes(sym)) {
      const ind = arr.findIndex(i => i === sym);
      const num1 = Number(arr[ind - 1]);
      const num2 = Number(arr[ind + 1]);
      arr.splice((ind - 1), 3);
      let result;
      switch (sym) {
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
      }
      arr.splice((ind - 1), 0, result);
    }
    return arr;
  }

  function resolve(arr) {
    const arr1 = operation(arr, '*');
    const arr2 = operation(arr1, '/');
    const arr3 = operation(arr2, '+');
    const arr4 = operation(arr3, '-');
    return arr4[0];
  }

  function calculate(arr) {
    if (arr.includes('(') || arr.includes(')')) {
      const ind1 = arr.indexOf('(');
      const ind2 = arr.lastIndexOf(')');
      console.log('indexes', [ind1,ind2])
      if (ind1 === -1 || ind2 === -1) throw new Error('Missing parentheses.');
      const mod = arr.slice((ind1 + 1), ind2);
      const reduce = calculate(mod);
      arr.splice(ind1, (ind2 - ind1), reduce);
      return resolve(arr);
    } else {
      return resolve(arr);
    }
  }

  const data = splitString(screenText);
  const result = calculate(data);
  return result;
}