import { useState } from "react";
import OddEvent from "./OddEvent";

const Counter = ({ initiatevalue }) => { // APP.JS에서 Prop으로 받은 값이다. number객체의 값인 initiatevalue 받을때 {} 안에 넣어서 호출한다. 
  const [count, setCount] = useState(initiatevalue);

  const IncreasePlus = () => { // 1씩 증가하는 함수 
    setCount(count + 1);
  };

  const decreaseminus = () => { // 1씩 감소 함수
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={IncreasePlus}>+</button>
      <button onClick={decreaseminus}>-</button>
      <OddEvent count={count} /> {/*동적인 state를 prop한다.*/}

    </div>
  );
};

Counter.defaultProps = { // APP.JS에서 initiatevalue이 값을 전달 받지 못했을 때 기본값을 1로 설정한다.
  initiatevalue: 1,
};

export default Counter;
