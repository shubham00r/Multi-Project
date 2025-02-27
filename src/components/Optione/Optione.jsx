import { useState } from "react";

const jobTitles = [
  "Front Office/Sales Executive",
  "Front Office Receptionist",
  "Front Office Manager",
  "Front Desk Executive",
  "Front Desk Receptionist",
  "Front end Developer",
  "RO Technician",
];
const City = ["Delhi", "Mumbai", "Pune", "Noida", "Gurugram", "Bangalore"];

export default function Optione() {
  const [search, setSearch] = useState();
  const [searchCity, setSearchCity] = useState();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);

  let filteredState;
  let filtered;
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter jobs based on input value
    if (value.trim() === "") {
      setFilteredJobs([]);
    } else {
      filtered = jobTitles.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };
  const handleCitySearch = (e) => {
    const value = e.target.value;
    setSearchCity(value);

    if (value.trim() === "") {
      setFilteredCity([]);
    } else {
      filteredState = City.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCity(filteredState);
    }
  };
  const handelItem = (e) => {
    if (e) {
      setSearch(e);
      setFilteredJobs([]);
    } else {
      setFilteredJobs(filtered);
    }
  };
  const handelCity = (e) => {
    if (e) {
      setSearchCity(e);
      setFilteredCity([]);
    } else {
      setFilteredCity(filteredState);
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-semibold">Search Candidate Database</h2>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Job Title Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Type job title..."
            value={search}
            onChange={handleSearch}
          />

          {filteredJobs.length > 0 && (
            <ul className="absolute w-full mt-1 overflow-auto bg-white border rounded-lg shadow-lg max-h-60">
              {filteredJobs.map((job, index) => (
                <li
                  onClick={() => handelItem(job)}
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {highlightMatch(job, search)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* City Select */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Type City"
            value={searchCity}
            onChange={handleCitySearch}
          />

          {filteredCity.length > 0 && (
            <ul className="absolute w-full mt-1 overflow-auto bg-white border rounded-lg shadow-lg max-h-60">
              {filteredCity.map((city, index) => (
                <li
                  onClick={() => handelCity(city)}
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {/* {highlightMatch(job, search)} */}
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
          🔍
        </button>
      </div>
    </div>
  );
}
