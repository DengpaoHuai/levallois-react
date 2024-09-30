import { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterComponent;
