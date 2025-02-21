import React, { useState } from "react";
import { carData } from "../CarSorting/CarsData";
const RandomCar = () => {
  const [car, SetCar] = useState(carData[0]);

  const getRandomCar = () => {
    let RandomCar = Math.floor(Math.random() * carData.length);
    SetCar(carData[RandomCar]);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Random Car Generator</h1>
        <div className="p-4 text-center bg-white rounded-lg shadow-lg w-80">
          <img
            src={car.img}
            alt={car.name}
            className="object-cover w-full h-40 rounded"
          />
          <h2 className="mt-2 text-xl font-semibold">{car.name}</h2>
          <p className="text-lg font-bold text-gray-600">{car.price}</p>
        </div>
        <button
          onClick={getRandomCar}
          className="px-4 py-2 mt-4 font-semibold text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Get Random Car
        </button>
      </div>
    </div>
  );
};

export default RandomCar;
