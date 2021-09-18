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
                onClick={() => {
                  close();
                  custArrived();
                }}
                class="text-xl mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Yes !
              </button>
              <button
                class="text-xl mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
