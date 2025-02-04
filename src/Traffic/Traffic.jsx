import React, { useEffect, useState } from "react";

const Traffic = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (count == 0) {
        // setColor("red");
        setCount(count + 1);
      } else if (count == 1) {
        // setColor("yellow");
        setCount(count + 1);
      } else if (count == 2) {
        // setColor("green");
        setCount(0);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="flex flex-col items-center h-screen gap-2 ">
      <div
        className={`rounded-full w-14 h-14 ${
          count == 0 ? "bg-red-600" : "bg-slate-400"
        } `}
      ></div>
      <div
        className={`rounded-full w-14 h-14 ${
          count == 1 ? "bg-yellow-400" : "bg-slate-400"
        } `}
      ></div>
      <div
        className={`rounded-full w-14 h-14 ${
          count == 2 ? "bg-green-800" : "bg-slate-400"
        } `}
      ></div>
    </div>
  );
};

export default Traffic;
