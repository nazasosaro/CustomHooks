import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val = 1) => {
    setCounter(counter + val);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = (val = 1, allowNegative = true) => {
    setCounter((prev) => {
      if (!allowNegative && prev < 1) return;
      setCounter(counter - val);
    });
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
