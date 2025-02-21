import React, { useEffect, useState } from "react";
import { carData } from "./CarsData";

const Cars = () => {
  const [data, setData] = useState(carData);
  const [input, SetInput] = useState("");
  console.log(data);

  const handelLow = () => {
    let sorting = [...data].sort((a, b) => a.price - b.price);
    setData(sorting);
  };

  const handelHigh = () => {
    let sortingHigh = [...data].sort((a, b) => b.price - a.price);
    setData(sortingHigh);
  };
  useEffect(() => {
    const filterSearch = carData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setData(filterSearch);
  }, [input]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-center">Car Price Sorting</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for a car..."
          className="w-full max-w-md p-2 border border-gray-300 rounded"
          onChange={(e) => SetInput(e.target.value)}
        />
      </div>

      {/* Sorting Buttons */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={handelLow}
          className="p-2 text-white bg-green-500 rounded"
        >
          Low to High
        </button>
        <button
          onClick={handelHigh}
          className="p-2 text-white bg-red-500 rounded"
        >
          High to Low
        </button>
      </div>

      {/* Car List - (Dummy Static UI) */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="p-2 border rounded shadow">
            <img
              src={item.img}
              alt={item.name}
              className="object-cover w-full h-40 rounded"
            />
            <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
            <p className="text-lg font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
