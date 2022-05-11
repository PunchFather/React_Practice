import { useState } from "react";
import OddEvent from "./OddEvent";

const Counter = ({ initiatevalue }) => {
  const [count, setCount] = useState(initiatevalue);

  const IncreasePlus = () => {
    setCount(count + 1);
  };

  const decreaseminus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={IncreasePlus}>+</button>
      <button onClick={decreaseminus}>-</button>
      <OddEvent count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initiatevalue: 1,
};

export default Counter;
