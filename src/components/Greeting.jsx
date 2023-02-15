import React, { useState, useEffect } from 'react';

export function Greeting(props) {
  const { children } = props;
  const [greet, toggleGreet] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleGreet(true);
    }, 3000);
  }, [])

  return (
    <>
      <p>{children}</p>
      <p>{greet && 'Hola Alfonsina'}</p>
    </>
  )
}