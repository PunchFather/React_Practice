// import "./App.css";
import React from "react";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  const number = {
    a: 1,
    b: 2,
    c: 3,
    initiatevalue: 1,
  };

  return (
    <div>
      <MyHeader />
      <Counter {...number} />
      {/* number변수를 Counter에 prop으로 넣어줬다. */}
    </div>
  );
}

export default App;
