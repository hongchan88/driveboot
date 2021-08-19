import React, { useRef } from "react";
import SearchList from "./searchlist";
import ResultNone from "./resultNone";

const Search = ({
  filteredSearch,
  optionSearch,
  product,
  filtered,
  searchOption,
  addonCart,
}) => {
  const searchRef = useRef("");
  const optionRef = useRef("");
  return (
    <section class="relative w-full max-w px-5 py-4 mx-auto rounded-md">
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <div class="flex justify-between">
          <input
            type="text"
            class="w-5/6 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
            ref={searchRef}
            onChange={(e) => filteredSearch(e, searchRef.current.value)}
          />
          <select
            class="py-3 pl-4 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ref={optionRef}
            value={searchOption}
            onChange={() => optionSearch(optionRef.current.value)}
          >
            <option value="name">Search by Name</option>
            <option value="brand">Search by Brand</option>
          </select>
        </div>
      </div>
      {console.log(filtered?.length, "check filter")}
      {filtered?.length > 0 ? (
        <div class="absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
          {filtered.map((key) => {
            return (
              <SearchList
                key={key}
                product={product[key]}
                addonCart={addonCart}
              />
            );
          })}
        </div>
      ) : filtered == 0 ? (
        <ResultNone />
      ) : (
        <div
          class={`absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent`}
        >
          {Object.keys(product).map((key) => {
            return (
              <SearchList
                key={key}
                product={product[key]}
                addonCart={addonCart}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Search;
