import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <header className=" text-black">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome To TIMON INC.</h1>
          <h2 className="text-xl font-medium float-right">murah dan timon</h2>
        </div>
        <div className="relative flex items-center border rounded-md border-black">
          <input
            type="text"
            placeholder="Search Product"
            className="px-4 py-5 pl-10 border rounded-md h-2 border-black font-bold bg-transparent focus:outline-none text-black"
          />
          <span className="absolute left-3 top-3 text-black h-4 w-4">
            <FontAwesomeIcon icon={faSearch} /> {/* Font Awesome search icon */}
          </span>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
