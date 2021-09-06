import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { Link } from "react-router-dom";
import Shops from "../../shops/shops";

import SellerSearch from "../sellersearch/sellersearch";

const Addshopform = ({
  shop,
  editShop,
  id,
  updateTradingTime,
  tradingToggle,
  tradingTime,
  filteredSearch,
  optionSearch,
  filtered,
  searchOption,
  deleteProduct,
  addProduct,
}) => {
  console.log(shop?.id, "new");

  const onChange = ({ name, value }) => {
    const updated = {
      ...shop,
      [name]: value,
    };
    console.log(updated);
    editShop(id, updated);
  };

  const tradingToggleOn = (e) => {
    const date = e.currentTarget.name;

    const updated = { ...tradingToggle };

    if (updated[date]) {
      updated[date] = false;
    } else {
      updated[date] = true;
    }

    updateTradingTime(id, updated, "opencloseDate");
  };

  const timeOnChange = (e) => {
    const date = e.currentTarget.id;
    const openOrclose = e.currentTarget.name;
    const time = e.currentTarget.value;

    const updated = { ...tradingTime };
    updated[date][openOrclose] = time;
    updateTradingTime(id, updated, "opencloseTime");
  };

  console.log(tradingTime);
  return (
    <Tabs>
      <TabList>
        <Tab>Info</Tab>
        <Tab>Pick Up location</Tab>
        <Tab>Trading Hours</Tab>
        <Tab>Products</Tab>
      </TabList>

      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <div class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  <EditText
                    onSave={onChange}
                    name="name"
                    defaultValue={shop?.name}
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>

                <div class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  <EditTextarea
                    onSave={onChange}
                    name="desc"
                    defaultValue={shop?.desc}
                    rows={7}
                    style={{ border: "1px solid #ccc" }}
                  />
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-cover object-center w-full h-64 rounded-md shadow"
                      src="../img/header.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Pick up location
                </h2>

                <div class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  <EditTextarea
                    onSave={onChange}
                    name="pickupdesc"
                    defaultValue={shop?.pickupdesc}
                    style={{ border: "1px solid #ccc" }}
                    rows={7}
                  />
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-fit object-center w-full h-64 rounded-md shadow"
                      src="../img/pickup.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center w-2/3">
              <Link to={{ pathname: `${shop?.google}` }} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
              <EditText
                onSave={onChange}
                name="google"
                defaultValue={
                  shop.google ? shop.google : "Google Map URL eg http//.."
                }
                style={{ border: "1px solid #ccc" }}
              />
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Trading Hours
                </h2>

                <div class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  <ul>
                    <li>
                      <span class="inline-block w-28">
                        <button name="monday" onClick={tradingToggleOn}>
                          Monday:
                        </button>
                      </span>
                      {tradingToggle?.["monday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="monday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.monday?.open}
                          />
                          &#160; - &#160;
                          <input
                            name="close"
                            type="time"
                            id="monday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.monday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="tuesday" onClick={tradingToggleOn}>
                          Tuesday:
                        </button>
                      </span>
                      {tradingToggle?.["tuesday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="tuesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.tuesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="tuesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.tuesday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="wednesday" onClick={tradingToggleOn}>
                          Wednesday:
                        </button>
                      </span>
                      {tradingToggle?.["wednesday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="wednesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="wednesday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="thursday" onClick={tradingToggleOn}>
                          Thursday:
                        </button>
                      </span>
                      {tradingToggle?.["thursday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="thursday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="thursday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.wednesday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="friday" onClick={tradingToggleOn}>
                          Friday:
                        </button>
                      </span>
                      {tradingToggle?.["friday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="friday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.friday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="friday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.friday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="saturday" onClick={tradingToggleOn}>
                          Saturday:
                        </button>
                      </span>
                      {tradingToggle?.["saturday"] ? (
                        <span>
                          <input
                            type="time"
                            name="open"
                            id="saturday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.saturday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="saturday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.saturday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                    <li>
                      <span class="inline-block w-28">
                        <button name="sunday" onClick={tradingToggleOn}>
                          Sunday:
                        </button>
                      </span>
                      {tradingToggle?.["sunday"] ? (
                        <span class="font-bold">
                          <input
                            type="time"
                            name="open"
                            id="sunday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.sunday?.open}
                          />
                          &#160; - &#160;
                          <input
                            type="time"
                            name="close"
                            id="sunday"
                            onChange={timeOnChange}
                            defaultValue={tradingTime?.sunday?.close}
                          />
                        </span>
                      ) : (
                        <span class="inline-block">Closed</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-fit object-center w-full h-64 rounded-md shadow"
                      src="../img/openclose.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Add Products
                </h2>

                <div class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  <SellerSearch
                    shop={shop}
                    filteredSearch={filteredSearch}
                    optionSearch={optionSearch}
                    filtered={filtered}
                    searchOption={searchOption}
                    deleteProduct={deleteProduct}
                    addProduct={addProduct}
                  />
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-fit object-center w-full h-64 rounded-md shadow"
                      src="../img/pickup.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
    </Tabs>
  );
};

export default Addshopform;
