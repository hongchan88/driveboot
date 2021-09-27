import React from "react";
import { Link } from "react-router-dom";

const Pickuplocation = ({ name, pickupdesc, location, pickupImg }) => {
  return (
    <section class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-8 mx-auto">
        <div class="items-center lg:flex">
          <div class="lg:w-1/2">
            <div className="flex">
              <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Pick up location
              </h2>
              {location ? (
                <Link to={{ pathname: `${location}` }} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transform hover:scale-125"
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
              ) : null}
            </div>
            <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              {pickupdesc}
            </p>
          </div>

          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img
                  class="object-fit object-center w-full h-64 rounded-md shadow"
                  src={
                    pickupImg
                      ? pickupImg
                      : "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631882811/default/scott-webb-nJZbmL6pvDY-unsplash_y1c83w.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pickuplocation;
