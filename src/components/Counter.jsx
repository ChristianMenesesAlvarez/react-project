import React, { useState } from 'react';

export function Counter(props) {
  const { init = 0, step = 1, min = 0, max = 99 } = props;
  const [counter, setCounter] = useState(init);

  return (
    <div>
      <button onClick={() => setCounter(counter - step > min ? counter - step : min)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + step < max ? counter + step : max)}>+</button>
    </div>
  )
}