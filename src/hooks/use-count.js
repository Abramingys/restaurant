import { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
}
