import React from "react";

import styles from "./sellerorderlist.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./style.css";
import Orderstatuscomponent from "./orderstatuscomponent";
import Order from "../../orderhistory/order";
import Orderproducts from "../../orderhistory/orderproducts";

const SellerOrderList = ({
  id,
  sellerOrder,
  deleteOrder,
  updatedSellerOrderStatus,
}) => {
  const status = sellerOrder.OrderStatus;
  console.log(sellerOrder, "order");

  const statusBar = (status) => {
    switch (status) {
      case "0":
        return "1/5";
      case "1":
        return "2/5";
      case "2":
        return "3/5";
      case "3":
        return "5/5";
    }
  };

  return (
    <div class="flex flex-col h-full">
      <div class="relative">
        <Popup
          className="my-popup"
          trigger={
            <button class="absolute right-0 top-0 transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
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

              <div class="text-2xl flex justify-center">
                Are you sure to cancel this order?
              </div>
              <div class="flex justify-evenly">
                <button
                  class="text-xl mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteOrder(sellerOrder.id)}
                >
                  Confirm
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
      </div>
      <section class="flex justify-between h-1/2 ">
        <section class="flex flex-col">
          <div>
            <p class="font-bold text-lg">Order #{sellerOrder.id}</p>
          </div>
          <div>
            <Popup
              trigger={
                <p class="test-sm cursor-pointer"> View ordered product </p>
              }
              modal
            >
              <table class="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr class="h-12 uppercase">
                    <th class="hidden md:table-cell"></th>
                    <th class="text-left">Product</th>
                    <th class="lg:text-right md:text-center text-left pl-5 lg:pl-0">
                      <span class="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span class="hidden lg:inline">Quantity</span>
                    </th>
                    <th class="hidden text-right md:table-cell">Unit price</th>
                    <th class="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(sellerOrder.cart).map((key) => {
                    return (
                      <Orderproducts key={key} items={sellerOrder.cart[key]} />
                    );
                  })}
                </tbody>
              </table>
              <div class="flex w-full justify-center">
                <p class="font-bold text-xl">
                  Total: ${sellerOrder.totalprice}
                </p>
              </div>
            </Popup>
          </div>
          <div className="container flex px-5 py-5 ">
            <div className="flex justify-center items-center">
              <img
                class="inline object-cover w-16 h-16 mr-2 rounded-full"
                src={sellerOrder?.buyerProfileImg}
                alt="Profile image"
              />
            </div>
            <div className="flex justify-center items-center">
              <ul>
                <li>{sellerOrder?.firstname}</li>
                <li>{sellerOrder?.email}</li>
                <li>
                  {sellerOrder?.arrived
                    ? "Arrived at pick up point"
                    : "Customer not yet arrived"}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="flex justify-end w-1/2">
          <div class="grid grid-cols-2 w-full ">
            <div>
              <p class="font-bold">Payment</p>

              <p class="text-sm">{sellerOrder.payment}</p>
            </div>
            <div>
              <p class="font-bold">Car Number</p>
              <p>{sellerOrder.plate}</p>
            </div>
            <div>
              <p class="font-bold">Pick up Date</p>
              <p>{sellerOrder.date}</p>
            </div>
            <div>
              <p class="font-bold">Pick up Time</p>
              <p>{sellerOrder.time}</p>
            </div>
          </div>
        </section>
      </section>

      <div className="border-t border-gray-200 w-full mt-12"></div>
      <div class="flex flex-col justify-center text-lg h-3/6">
        <span class="font-bold text-lg">
          <Orderstatuscomponent
            status={status}
            updatedSellerOrderStatus={updatedSellerOrderStatus}
            sellerOrder={sellerOrder}
            id={id}
          />
        </span>
      </div>
      {status == "4" ? null : (
        <section class="flex h-1/2 items-center">
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-6">
              <div class="h-3 relative w-full rounded-full overflow-hidden">
                <div class="w-full h-full bg-gray-200 absolute"></div>

                <div
                  id="bar"
                  class={`transition-all ease-out duration-1000 h-full bg-green-500 relative w-${statusBar(
                    status
                  )}`}
                ></div>
              </div>
            </div>
            <div class="col-start-1 col-end-1 text-sm">
              <span>Order Placed</span>
            </div>
            <div class="col-start-3 col-end-3 text-sm">
              <span class="flex justify-start">Process</span>
            </div>
            <div class="col-start-4 col-span-1 text-sm ">
              <span class="flex justify-center">Ready</span>
            </div>
            <div class="col-start-6 col-end-6 text-sm ">
              <span class="flex justify-end">Picked up</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SellerOrderList;
