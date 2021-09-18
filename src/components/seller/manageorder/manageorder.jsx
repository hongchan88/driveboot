import React from "react";

import SellerOrderList from "./sellerorderlist";
import Dropselect from "./dropselect";

const Manageorder = ({ sellerOrders, updatedSellerOrderStatus }) => {
  console.log(sellerOrders, "updated");
  return sellerOrders ? (
    <div class="flex flex-col w-11/12 h-full">
      <div className="flex justify-end">
        <Dropselect />
      </div>
      {Object.keys(sellerOrders)
        .reverse()
        .map((id) => (
          <div class="border-2 border-gray-100 mt-10 rounded-lg w-full h-72 max-w-5xl min-w-custom shadow-sm py-4 px-6">
            <SellerOrderList
              key={id}
              id={id}
              sellerOrder={sellerOrders[id]}
              updatedSellerOrderStatus={updatedSellerOrderStatus}
            />
          </div>
        ))}
    </div>
  ) : (
    <div className="-mt-12 w-5/6 max-w-xl ">
      <div className="py-5">
        <div className="border-t border-gray-200 my-10" />
        <div class="flex justify-center">
          <p class="text-lg">Order does exist</p>
        </div>
        <div className="border-t border-gray-200 my-10" />
      </div>
    </div>
  );
};
export default Manageorder;
