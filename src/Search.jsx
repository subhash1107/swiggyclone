import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { Star } from "./RestCard";

const Search = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchData = useCallback(async () => {
    if (!input) {
      setFilteredResults([]);
      return;
    }

    try {
      const response = await axios.get(
        "https://swiggycloneapi.onrender.com/top-restaurant-chains"
      );
      const data = response.data.filter(
        (val) =>
          val && val.name && val.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredResults(data);
      setActiveIndex(-1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [input]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [input, fetchData]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredResults.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter" && activeIndex !== -1) {
      handleClick(filteredResults[activeIndex]);
    }
  };

  const handleClick = (result) => {
    if (selectedItem !== result) {
      setInput("");
      setSelectedItem(result);
    }
  };
  const itemsMinus = () => {
    if (items === 0) {
      return false;
    } else {
      setItems(items - 1);
    }
  };
  const itemsPlus = () => {
    setItems(items + 1);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="relative lg:px-0 px-3">
        <input
          placeholder="Search for Restaurants and Food..."
          className="w-full sm:mx-auto md:mx-auto my-12 rounded-lg p-3 sm:pl-10 pl-4 border border-black focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FaSearch className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="rounded-md">
        {filteredResults.length > 0 && input ? (
          <ul>
            {filteredResults.map((result, index) => (
              <li
                key={index}
                className={`py-2 px-4 flex gap-6 hover:bg-zinc-200 ${
                  index === activeIndex ? "bg-zinc-300" : ""
                }`}
                onClick={() => handleClick(result)}
              >
                <div className="h-[50px] w-[55px] rounded-md overflow-hidden">
                  <img
                    src={"https://swiggycloneapi.onrender.com/images/" + result.image}
                    alt={result.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  {result.name}
                  <p className="text-slate-400">{result.place}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          input && <p className="text-gray-500">No results found.</p>
        )}
        {selectedItem && (
          <div className="mt-4 p-4 border flex sm:flex-row flex-col gap-4 border-gray-300 rounded-md">
            <div className="sm:w-[250px] w-full h-[250px] rounded-md overflow-hidden">
              <img
                src={"https://swiggycloneapi.onrender.com/images/" + selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{selectedItem.title}</h2>
              <p className="text-gray-500">{selectedItem.place}</p>
              <p className="text-gray-500">
                Delivery timing: {selectedItem.minTime}-{selectedItem.maxTime} mins
              </p>
              <p className="text-gray-500">
                <Star className="inline" /> {selectedItem.rating}
              </p>
              <br />
              <div className="flex sm:flex-col flex-row justify-between">
                <div>
                  <button
                    onClick={itemsMinus}
                    className="bg-slate-100 rounded-md h-8 w-8 border border-slate-400"
                  >
                    -
                  </button>
                  <span className="mx-3">{items}</span>
                  <button
                    onClick={itemsPlus}
                    className="bg-slate-100 rounded-md h-8 w-8 border border-slate-400"
                  >
                    +
                  </button>
                </div>
                <button className="sm:mt-4 bg-green-600 py-2 tracking-tighter text-white rounded-md sm:px-5 px-4">
                  <FaCartPlus className="inline mr-2" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
        {console.log(selectedItem)}
      </div>
    </div>
  );
};

export default Search;