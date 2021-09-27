import React from "react";
import Popup from "reactjs-popup";
const PopupAsk = ({ askQ, custArrived }) => {
  return (
    <>
      <Popup
        trigger={
          <button className="bg-green-400 rounded-sm px-4 ml-2 text-white font-bold hover:bg-green-600">
            Click
          </button>
        }
        modal
      >
        {(close) => (
          <div className="modal">
            <div class="absolute right-2 top-0">
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>

            <div class="text-2xl flex justify-center">{askQ}</div>
            <div class="flex justify-evenly">
              <button
                class="w-1/3 mt-10 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  close();
                  custArrived();
                }}
              >
                Confirm
              </button>
              <button
                class="w-1/3 mt-10 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                No
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default PopupAsk;
