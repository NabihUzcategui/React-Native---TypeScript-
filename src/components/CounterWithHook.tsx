import {useCounter} from "../hooks/useCounter";

export const CounterWithHook = () => {
  const {increase, count} = useCounter({});

  return (
    <>
      <h3>
        Counter With Hook: <small>{count}</small>
      </h3>

      <div>
        <button onClick={() => increase(+1)}> +1 </button>
        &nbsp;
        <button onClick={() => increase(-1)}> -1 </button>
      </div>
    </>
  );
};
