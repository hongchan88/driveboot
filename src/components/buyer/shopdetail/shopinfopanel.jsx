import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Pickuplocation from "./pickuplocation";

const Shopinfopanel = ({ shops, id }) => {
  const {
    name,
    product,
    desc,
    pickupdesc,
    location,
    opencloseDate,
    opencloseTime,
    infoImg,
    pickupImg,
  } = shops ? shops[id] : {};

  console.log(opencloseTime.monday.close, "shops");
  return (
    <Tabs>
      <TabList>
        <Tab>Info</Tab>
        <Tab>Pick Up location</Tab>
        <Tab>Trading Hours</Tab>
      </TabList>

      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  {name}
                </h2>

                <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  {desc}
                </p>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-cover object-center w-full h-64 rounded-md shadow"
                      src={
                        infoImg
                          ? infoImg
                          : "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631881307/default/fikri-rasyid-ezeC8-clZSs-unsplash_dynpg4.jpg"
                      }
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
        <Pickuplocation
          name={name}
          pickupdesc={pickupdesc}
          location={location}
          pickupImg={pickupImg}
        />
      </TabPanel>
      <TabPanel>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Trading Hours
                </h2>

                <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  {opencloseDate.monday ? (
                    <div class="flex">
                      <p class="w-24">Monday:</p>

                      <p>
                        {`${opencloseTime?.monday.open} - ${opencloseTime?.monday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Monday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.tuesday ? (
                    <div class="flex">
                      <p class="w-24">Tuesday:</p>

                      <p>
                        {`${opencloseTime?.tuesday.open} - ${opencloseTime?.tuesday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Tuesday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.wednesday ? (
                    <div class="flex">
                      <p class="w-24">Wednesday:</p>
                      <p>
                        {`${opencloseTime?.wednesday.open} - ${opencloseTime?.wednesday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Wednesday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.thursday ? (
                    <div class="flex">
                      <p class="w-24">Thursday:</p>
                      <p>
                        {`${opencloseTime?.thursday.open} - ${opencloseTime?.thursday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Thursday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.friday ? (
                    <div class="flex">
                      <p class="w-24">Friday:</p>
                      <p>
                        {`${opencloseTime?.friday.open} - ${opencloseTime?.friday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Friday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.saturday ? (
                    <div class="flex">
                      <p class="w-24">Saturday:</p>

                      <p>
                        {`${opencloseTime?.saturday.open} - ${opencloseTime?.saturday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Saturday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                  {opencloseDate.sunday ? (
                    <div class="flex">
                      <p class="w-24">Sunday:</p>

                      <p>
                        {`${opencloseTime?.sunday.open} - ${opencloseTime?.sunday.close}`}
                      </p>
                    </div>
                  ) : (
                    <div class="flex">
                      <p class="w-24">Sunday:</p>
                      <p>Closed</p>
                    </div>
                  )}
                </p>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-fit object-center w-full h-64 rounded-md shadow"
                      src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1631880978/default/khachik-simonian-XYavU5BGF9o-unsplash_iqfr5k.jpg"
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

export default Shopinfopanel;
