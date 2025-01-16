import React, { useEffect, useState } from "react";

const Search = () => {
  const [animal, SetAnimal] = useState([]);

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      name: "Animal",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Animal",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Natural",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Bird",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cat",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Dog",
    },
  ];

  console.log(data);
  const handleFilter = (value) => {
    if (value == "All") {
      SetAnimal(data);
    } else {
      let filters = data.filter((img) => img.name == value);
      SetAnimal(filters);
    }
  };

  useEffect(() => {
    SetAnimal(data);
  }, []);
  return (
    <div>
      <div>
        <h1 className="mt-5 text-2xl text-center ">IMG FILTER</h1>
        <ul className="flex justify-center gap-5 mt-10 ">
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("All")}
          >
            All
          </li>
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("Animal")}
          >
            Animal
          </li>
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("Natural")}
          >
            Natural
          </li>
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("Bird")}
          >
            Bird
          </li>
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("Dog")}
          >
            Dog
          </li>
          <li
            className="px-3 py-3 bg-gray-800 rounded-md cursor-pointer text-slate-50"
            onClick={() => handleFilter("Cat")}
          >
            Cat
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
        {animal.map((item, i) => {
          return (
            <div key={i} className="">
              <img
                className="float-left w-[400px] h-[400px] object-cover"
                src={item.img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
