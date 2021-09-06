import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ResultNone from "../../search/resultNone";

import SellerSearchList from "./sellersearchlist";

const SellerSearch = ({
  filteredSearch,
  optionSearch,
  shop,
  filtered,
  searchOption,
  deleteProduct,
  addProduct,
}) => {
  const { product } = shop;
  const searchRef = useRef("");
  const optionRef = useRef("");
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    let newId = 0;
    if (product != undefined) {
      newId = Object.keys(product).reduce(function (a, b) {
        return product[a] > product[b] ? a : b;
      });
      console.log(newId, "highet number");
    } else {
      newId = 1;
    }

    const updated = { ...data, id: parseInt(newId) + 1 };
    addProduct(updated);
    reset();
  };

  return (
    <section class="relative w-full max-w px-5 py-4 mx-auto rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="grid grid-cols-6 gap-6 mb-3"
      >
        <div class="col-span-6 ">
          <label class="mr-5">Name</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            class="w-2/3 py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div class="col-span-6 ">
          <label class="mr-5">Brand</label>
          <input
            {...register("brand")}
            type="text"
            id="brand"
            name="brand"
            class="w-2/3 py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div class="col-span-2">
          <label class="mr-6">Price</label>
          <input
            {...register("price")}
            type="text"
            id="price"
            name="price"
            class="w-2/3 py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div class="col-span-2  ">
          <label class="mr-5">Size</label>
          <input
            {...register("size")}
            type="text"
            id="size"
            name="size"
            class="w-2/3 py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div class="col-span-2 ">
          <div className="flex h-full items-end">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <div class="flex justify-between">
          <input
            type="text"
            class="w-5/6 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
            ref={searchRef}
            onChange={(e) => filteredSearch(product, searchRef.current.value)}
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

      {filtered?.length > 0 ? (
        <div class="absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
          {filtered.map((key) => {
            return (
              <SellerSearchList
                key={key}
                product={product[key]}
                // editproduct={editproduct}
              />
            );
          })}
        </div>
      ) : filtered == 0 ? (
        <ResultNone />
      ) : product == undefined ? (
        <ResultNone />
      ) : (
        <div
          class={`absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent`}
        >
          {Object.keys(product).map((key) => {
            return (
              <SellerSearchList
                key={key}
                product={product[key]}
                deleteProduct={deleteProduct}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SellerSearch;
