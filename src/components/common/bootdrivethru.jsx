import React, { useEffect, useRef, useState } from "react";

import Cart from "./cart";
import Search from "../search/search";
import { set, useForm } from "react-hook-form";
import cogoToast from "cogo-toast";

const Bootdrivethru = ({
  filteredSearch,
  optionSearch,
  product,
  addonCart,
  removeItemonCart,
  totalprice,
  searchOption,
  filtered,
  addQty,
  cart,
  addOrder,
  shops,
  shopid,
  profile,
  setFiltered,
}) => {
  const { register, handleSubmit, reset, setValue, getValues } = useForm();

  const [getprofile, setProfile] = useState();
  const [error, setError] = useState();
  const [aftersubmit, setAftersubmit] = useState(false);
  useEffect(() => {
    setProfile(profile);
  }, [profile]);

  console.log(getprofile);
  const onChange = (e) => {
    e.preventDefault();

    const updated = {
      ...getprofile,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setProfile(updated);
  };

  const onSubmit = (data) => {
    setError(null);
    const newOrder = {
      ...data,
      firstname: getprofile.firstname,
      lastname: getprofile.lastname,
      plate: getprofile.plate,
      email: getprofile.email,
      id: Date.now(),
      totalprice,
      cart,
      shopname: shops[shopid].name,
      shopid,
      OrderStatus: "0",
      buyerProfileImg: profile.profileimage,
    };

    const emptyValidation = Object.keys(newOrder).filter(
      (key) => newOrder[key] == ""
    );

    if (Object.keys(cart).length == 0) {
      cogoToast.error("Please add products in the cart");
    } else if (emptyValidation.length != 0) {
      setError(emptyValidation);
      console.log(setError);
      cogoToast.error("Required fields are empty");
    } else {
      addOrder({ ...newOrder, arrived: false });
      setAftersubmit(true);
      cogoToast.success("Successfully submitted your order!");
    }
  };

  return (
    <>
      {aftersubmit ? (
        <div class="flex justify-center text-2xl text-center mt-10 border-2 border-gray-200 rounded-lg px-10 py-10">
          <div class="flex flex-col">
            <p>Successfully submitted Boot Drive Thru Order Form!</p>
            <p class="mt-10">Check your order detail in order history page!</p>
          </div>
        </div>
      ) : (
        <section class="flex flex-col">
          <Search
            filteredSearch={filteredSearch}
            optionSearch={optionSearch}
            product={product}
            addonCart={addonCart}
            searchOption={searchOption}
            filtered={filtered}
            setFiltered={setFiltered}
          />

          <div class="mb-3">
            <Cart cart={cart} removeItem={removeItemonCart} addQty={addQty} />
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0">
              <div className="flex flex-col items-center px-4 mb-10 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Boot Drive Thru Order Form
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  The shop will send you confirmation email with the total price
                  / location / Time
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>

                        <input
                          {...register("firstname")}
                          type="text"
                          name="firstname"
                          value={getprofile?.firstname}
                          onChange={onChange}
                          id="firstname"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("firstname") ? (
                          <small class="text-red-400">
                            first name requried
                          </small>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          {...register("lastname")}
                          value={getprofile?.lastname}
                          onChange={onChange}
                          type="text"
                          name="lastname"
                          id="lastname"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("lastname") ? (
                          <small class="text-red-400">last name requried</small>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          {...register("email")}
                          value={getprofile?.email}
                          onChange={onChange}
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("email") ? (
                          <small class="text-red-400">email requried</small>
                        ) : null}
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Preferred Pickup date
                        </label>
                        <input
                          {...register("date")}
                          type="date"
                          name="date"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("date") ? (
                          <small class="text-red-400">date requried</small>
                        ) : null}
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Preferred Pickup Time
                        </label>
                        <input
                          {...register("time")}
                          type="time"
                          name="time"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("time") ? (
                          <small class="text-red-400">
                            pick up time requried
                          </small>
                        ) : null}
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Car number plate
                        </label>
                        <input
                          {...register("plate")}
                          value={getprofile?.plate}
                          onChange={onChange}
                          type="text"
                          name="plate"
                          id="plate"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {error?.includes("plate") ? (
                          <small class="text-red-400">
                            car plate number requried
                          </small>
                        ) : null}
                      </div>
                      <div className="col-span-6 ">
                        <label
                          htmlFor="payment"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Payment Method
                        </label>
                        <select
                          {...register("payment")}
                          id="payment"
                          name="payment"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Card when pick up</option>
                          <option>Cash when pick up</option>
                          <option>Paypal</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <p>
                          You will get a confirmation email to pick up the
                          products you ordered.
                        </p>
                        <p>
                          Please check the exact pick up location for the shop
                          you ordered
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="totalprice"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Total estimated Price
                        </label>
                        <input
                          readOnly
                          type="text"
                          value={`$ ${totalprice}`}
                          name="totalprice"
                          id="totalprice"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Bootdrivethru;
