import React, {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);

  const increase = (value: number) => setCount(count + value);
  const decrease = (value: number) => setCount(count - value);

  return (
    <>
      <h3>
        Counter: <small>{count}</small>
      </h3>

      <div>
        <button onClick={() => increase(1)}> +1 </button>
        &nbsp;
        <button onClick={() => decrease(1)}> -1 </button>
      </div>
    </>
  );
};
