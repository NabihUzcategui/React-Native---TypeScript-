import {useState} from "react";

interface Options {
  initialValue?: number;
}

export const useCounter = ({initialValue = 0}: Options) => {
  const [count, setCount] = useState(initialValue);

  const increase = (value: number) => {
    const newValue = count + value;
    if (newValue < 0) return;
    setCount(count + value);
  };

  // const decrease = (value: number) => {
  //   setCount(count - value);
  // };

  return {
    //properties
    count,

    //methods
    increase,
    // decrease,
  };
};
