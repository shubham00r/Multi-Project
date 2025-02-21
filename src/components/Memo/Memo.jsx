import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);

  const fun = () => {
    console.log("fun");
    return count * 2;
  };

  const MemoValue = useMemo(() => fun(), [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setItem(item + 1)}>clickItem</button>
      <h1>{MemoValue}</h1>
    </div>
  );
};

export default Memo;
