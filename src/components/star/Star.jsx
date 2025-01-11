import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
const Star = () => {
  const [select, setSelect] = useState(0);
  const stars = [
    {
      id: 1,
      name: <CiStar />,
    },
    {
      id: 2,
      name: <CiStar />,
    },
    {
      id: 3,
      name: <CiStar />,
    },
    {
      id: 4,
      name: <CiStar />,
    },
    {
      id: 5,
      name: <CiStar />,
    },
  ];

  //   const handle =()=>{
  //       if(select==0){

  //   }
  return (
    <div className="bg-[#e6e9fb] h-screen">
      <div className="container mx-auto p-10 flex justify-center items-center h-screen">
        <div className=" bg-slate-50 px-4  h-52 rounded-md">
          <div className=" ">
            <h1 className="text-center font-bold text-lg pt-5">
              How many Star Would you Give to Our Online Code <br /> Editor
            </h1>

            <div className="flex justify-center gap-2 pt-5">
              {stars.map((item, index) => {
                return (
                  <>
                    <button
                      key={item.id}
                      onClick={() => setSelect(index)}
                      className={`text-4xl ${
                        select >= index ? "text-yellow-500" : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </button>
                  </>
                );
              })}
            </div>
            <p className="text-center text-2xl font-semibold pt-5">
              {select == 0
                ? "poor"
                : select == 1
                ? "fair"
                : select == 2
                ? "good"
                : select == 3
                ? "very good"
                : "excellent"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
