export default function Calc(props) {

  return (
    <div className="calc-wrapper">
      <Screen>{scrText}</Screen>
      <Panel />
    </div>
  )
}

function Screen(props) {
  const { children } = props;

}

function Panel(props) {

}

function getResult(screenText) {

  function splitString(str) {
    let arr = [], temp = '';
    for (let x = 0; x < str.length; x++) {
      if (str[x].match(/[0-9.]/)) {
        temp += str[x];
        if (x === (str.length - 1)) arr.push(temp); 
      } else {
        arr.push(temp);
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
        default:
          throw new Error('Unrecognized symbol.')
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
    return arr4;
  }

  function getParentheses(arr) {
    if (!arr.includes('(') && !arr.includes(')')) return;
    while (arr.includes('(') || arr.includes(')')) {
      const ind1 = arr.findIndex(i => i === '(');
      const ind2 = arr.findIndex(i => i === ')');
      const module = arr.slice((ind1 + 1), (ind2 - 1));
      
      arr.splice(ind1, (ind2 - ind1));
    }
    const resolvedModule = 
  }

}