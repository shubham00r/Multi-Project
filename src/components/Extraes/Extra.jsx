import React, { useEffect, useState } from "react";
import { SiTrueup } from "react-icons/si";

const Extra = () => {
  const [color, setColor] = useState(true);

  const handelColor = () => {
    setColor(false);
  };
  const handelColors = () => {
    setColor(true);
  };

  return (
    <div
      className={`flex justify-center h-screen ${
        color ? " bg-slate-100" : "bg-black"
      }`}
    >
      <button onClick={handelColor}>Dark</button>
      <button onClick={handelColors}>Light</button>
    </div>
  );
};

export default Extra;
