import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import ResultNone from "../../search/resultNone";

import SellerSearchList from "./sellersearchlist";
import cogoToast from "cogo-toast";
import { useState } from "react/cjs/react.development";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../myshop/addshopform.module.css";

const SellerProducts = ({
  filteredSearch,
  optionSearch,
  shop,
  filtered,
  searchOption,
  deleteProduct,
  addProduct,
  setFiltered,
  imageChange,
  productImgUpload,
}) => {
  const { product } = shop;
  const searchRef = useRef();
  const optionRef = useRef();
  const productImgRef = useRef();
  const { handleSubmit, register, reset } = useForm();
  const [productImg, setProductImg] = useState();
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(false);

  console.log(isLoading);
  const onChangeImg = async (e) => {
    setisLoading(true);
    const url = await productImgUpload(e);

    setProductImg(url);
    setisLoading(false);
    // console.log("hello");
    // productImgUpload(e).then((url) => {
    //   console.log(url);
    // });
    // console.log(productImg);
  };

  useEffect(() => {
    setFiltered(null);
  }, []);

  const onSubmit = (data) => {
    let newId = 0;
    if (product != undefined && Object.keys(product).length > 0) {
      newId = Object.keys(product).reduce(function (a, b) {
        return product[a] > product[b] ? a : b;
      });
      console.log(newId, "highest number");
      newId = parseInt(newId) + 1;
    } else {
      newId = 1;
    }
    const emptyValidation = Object.keys(data).filter((key) => data[key] == "");

    if (emptyValidation.length != 0) {
      setError(emptyValidation);
      cogoToast.error("Required fields are empty");
    } else if (!productImg) {
      setError(null);
      cogoToast.error("Please add product photo");
    } else {
      const updated = { ...data, id: parseInt(newId), productImg: productImg };
      addProduct(updated);
      reset();
      setError(null);
      setProductImg(null);
      scrollToSearchBar();
      cogoToast.success("Successfully submitted your order!");
    }

    //validator if img not exist or name,brand...
  };

  const scrollToSearchBar = () => {
    searchRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section class="relative w-full max-w px-5 py-4 mx-auto rounded-md">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Product
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly once you add it so be
              careful what you add.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        {...register("name")}
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="eg Chilli paste"
                      />
                    </div>
                    {error?.includes("name") ? (
                      <small class="text-red-400">product name requried</small>
                    ) : null}
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        {...register("brand")}
                        type="text"
                        name="brand"
                        id="brand"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="eg Nongshim"
                      />
                    </div>
                    {error?.includes("brand") ? (
                      <small class="text-red-400">brand name requried</small>
                    ) : null}
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Size
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        {...register("size")}
                        type="text"
                        name="size"
                        id="size"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="eg 500g"
                      />
                    </div>
                    {error?.includes("size") ? (
                      <small class="text-red-400">product size requried</small>
                    ) : null}
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        {...register("price")}
                        type="text"
                        name="price"
                        id="price"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="eg 500g"
                      />
                    </div>
                    {error?.includes("price") ? (
                      <small class="text-red-400">price requried</small>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("desc")}
                      id="desc"
                      name="desc"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="This is..."
                    />
                  </div>
                  {error?.includes("desc") ? (
                    <small class="text-red-400">description requried</small>
                  ) : null}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-2/3 w-2/3 overflow-hidden bg-gray-100">
                      {productImg ? (
                        <img
                          className="h-full w-full"
                          src={productImg}
                          alt=""
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      ref={productImgRef}
                      onChange={onChangeImg}
                    />
                    <button
                      onClick={(e) => imageChange(e, productImgRef)}
                      name="productImg"
                      type="button"
                      className="ml-5 w-1/3 h-16 flex justify-center items-center bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isLoading ? (
                        <span>
                          <ClipLoader color="gray" loading={true} size="30" />
                        </span>
                      ) : productImg ? (
                        "Change photo"
                      ) : (
                        "Upload photo"
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {!isLoading ? (
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Product
                  </button>
                ) : (
                  <button
                    disabled
                    type="submit"
                    className="inline-flex cursor-not-allowed justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600"
                  >
                    Add Product
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <form
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
        <div class="col-span-6">
          <label class="mr-5">Price</label>
          <input
            {...register("price")}
            type="text"
            id="price"
            name="price"
            class="w-2/3 py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div class="col-span-6  ">
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
      </form> */}
      <div class="flex justify-center mt-10">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          List of published products
        </h3>
      </div>
      <div class="relative mt-10 ">
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
            class="w-4/6 shadow py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
            ref={searchRef}
            onChange={(e) => filteredSearch(product, searchRef.current.value)}
          />
          <select
            class="py-3 pl-4 pr-4 w-2/6 shadow text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
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
        <div class="block sinset-x-0 px-6 py-3 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
          {filtered.map((key) => {
            return (
              <SellerSearchList
                key={key}
                product={product[key]}
                deleteProduct={deleteProduct}
                filterOn={true}
              />
            );
          })}
        </div>
      ) : filtered == 0 ? (
        <ResultNone message={"None product Found. Try other keywords."} />
      ) : product === undefined || Object?.keys(product)?.length == 0 ? (
        <ResultNone message={"There is no products listed"} />
      ) : (
        <div
          class={`block inset-x-0 px-6 py-3 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent`}
        >
          {Object.keys(product)
            .reverse()
            .map((key) => {
              return (
                <SellerSearchList
                  key={key}
                  product={product[key]}
                  deleteProduct={deleteProduct}
                  filterOn={false}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default SellerProducts;
