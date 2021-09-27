import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Orderproducts from "../../buyer/orderhistory/orderproducts";
import Orderstatuscomponent from "./orderstatuscomponent";
import "./style.css";

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

              <p>{sellerOrder.payment}</p>
            </div>
            <div>
              <p class="font-bold">Car Number</p>
              <p>{sellerOrder.plate}</p>
            </div>
            <div>
              <p class="font-bold">Pick up Date/Time</p>
              <p>
                {sellerOrder.date} / {sellerOrder.time}
              </p>
            </div>

            <div>
              <p class="font-bold">Order created</p>
              <p>{sellerOrder.createdTime}</p>
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
