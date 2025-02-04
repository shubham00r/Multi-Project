import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, SetCount] = useState(0);
  const [item, SetItem] = useState(10);

  const fun = () => {
    console.log("fun");
    return count * 2;
  };

  const memoFun = useMemo(() => fun(), [count]);
  return (
    <div>
      <div>
        <h1>{memoFun}</h1>
        <div>{count}</div>
        <div>{item}</div>

        <button onClick={() => SetCount(count + 1)}>click count</button>
        <button onClick={() => SetItem(item + 1)}>click item</button>
      </div>
    </div>
  );
};

export default Memo;
